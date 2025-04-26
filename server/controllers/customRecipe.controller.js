//pipeline for gemini 
import CustomRecipe from "../models/customRecipe.model.js";
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

        // Generate recipe with Gemini
        const { recipeName, generatedContent } = await generateRecipe(
            instructions, 
            dietaryPreference
        );

        // Save to database
        const newRecipe = new CustomRecipe({
            username,
            recipe_name: recipeName,
            instructions,
            generated_content: generatedContent,
            dietary_preference: dietaryPreference
        });

        await newRecipe.save();

        res.status(201).json({
            success: true,
            data: {
            ...newRecipe.toObject(),
            generated_content: JSON.parse(generatedContent) // Parse for response
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


/*
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