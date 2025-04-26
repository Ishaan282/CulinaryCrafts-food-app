//pipeline for gemini 
import CustomRecipe from "../models/custom_recipe.model.js";
import { generateRecipe } from "../services/geminiService.js";

/*
    * Create a new custom recipe
    * @route POST /api/recipes/custom
*/
export const createCustomRecipe = async (req, res) => {
    try {
        const { instructions, dietaryPreference, username } = req.body;

        if (!instructions || !dietaryPreference) {
            return res.status(400).json({
                success: false,
                message: "Instructions and dietary preference are required"
            });
        }

        // Generate recipe with Gemini (note the correct destructuring)
        const { recipe_name, generated_content } = await generateRecipe(
            instructions, 
            dietaryPreference
        );

        // Save to database
        const newRecipe = new CustomRecipe({
            username,
            recipe_name, // using the correct variable
            instructions,
            generated_content, // using the correct variable
            dietary_preference: dietaryPreference
        });

        await newRecipe.save();

        res.status(201).json({
            success: true,
            data: {
                ...newRecipe.toObject(),
                generated_content: JSON.parse(generated_content) // Parse for response
            }
        });
    } catch (error) {
        console.error("Controller Error:", error);
        res.status(500).json({
            success: false,
            message: error.message || "Internal server error"
        });
    }
};


/*//!
    * Get user's custom recipes
    * @route GET /api/recipes/custom
*/
export const getCustomRecipes = async (req, res) => {
    try {
        const { username } = req.query;
        
        if (!username) {
            return res.status(400).json({
            success: false,
            message: "Username is required"
            });
        }

        const recipes = await CustomRecipe.find({ username })
            .sort({ createdAt: -1 });

        // Parse generated_content for each recipe
        const formattedRecipes = recipes.map(recipe => ({
            ...recipe.toObject(),
            generated_content: JSON.parse(recipe.generated_content)
        }));

        res.status(200).json({
            success: true,
            data: formattedRecipes
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};

/**
 * Delete a custom recipe
 * @route DELETE /api/recipes/custom/:id
 */

export const deleteCustomRecipe = async (req, res) => {
    try {
        const { id } = req.params;
        const { username } = req.body; // Require username for verification

        if (!username) {
            return res.status(400).json({
            success: false,
            message: "Username is required for verification"
            });
        }

        // Find and delete the recipe (only if owned by user)
        const deletedRecipe = await CustomRecipe.findOneAndDelete({
            _id: id,
            username: username
        });

        if (!deletedRecipe) {
            return res.status(404).json({
            success: false,
            message: "Recipe not found or you don't have permission to delete it"
            });
        }

        res.status(200).json({
            success: true,
            message: "Recipe deleted successfully",
            data: {
            id: deletedRecipe._id,
            recipe_name: deletedRecipe.recipe_name
            }
        });

    } catch (error) {
        console.error("Delete Error:", error);
        res.status(500).json({
            success: false,
            message: error.message || "Internal server error"
        });
    }
};