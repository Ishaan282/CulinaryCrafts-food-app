//pipeline for gemini 
import CustomRecipe from "../models/custom_recipe.model.js";
import { generateRecipe } from "../services/geminiService.js";

/**
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

    // Get raw Markdown from Gemini
    const generated_content = await generateRecipe(instructions, dietaryPreference);

    // Extract recipe name from first line (e.g., "# Recipe Name")
    const recipe_name = generated_content.split('\n')[0].replace('#', '').trim();

    // Save to database (as string)
    const newRecipe = new CustomRecipe({
        username,
        recipe_name,
        instructions,
        generated_content, // Store Markdown directly
        dietary_preference: dietaryPreference
    });

    await newRecipe.save();

    res.status(201).json({
        success: true,
        data: newRecipe.toObject() // Frontend receives raw Markdown
    });

    } catch (error) {
    console.error("Controller Error:", error);
    res.status(500).json({
        success: false,
        message: error.message.includes("generate") 
        ? error.message 
        : "Internal server error"
    });
    }
};

/**
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

        // Return recipes with raw Markdown (no parsing needed)
        res.status(200).json({
            success: true,
            data: recipes.map(recipe => recipe.toObject())
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message || "Failed to fetch recipes"
        });
    }
};

/**
    * Getting single recipe
    *  @route GET /api/recipes/custom/:id
 */
export const getRecipeById = async (req, res) => {
    try {
        const { id } = req.params;
        const recipe = await CustomRecipe.findById(id);

        if (!recipe) {
        return res.status(404).json({ 
            success: false, 
            message: "Recipe not found" 
        });
        }

        res.status(200).json({
        success: true,
        data: recipe.toObject() // Returns raw Markdown
        });

    } catch (error) {
        res.status(500).json({
        success: false,
        message: error.message || "Failed to fetch recipe"
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