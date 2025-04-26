const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });


// Initialize Gemini
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
/**
 * Generates a custom recipe using Gemini AI
 * @param {string} instructions - User's cooking instructions
 * @param {string} dietaryPreference - Dietary preference from enum
 * @returns {Promise<{recipe_name: string, generated_content: string}>}
 */
exports.generateRecipe = async (instructions, dietaryPreference) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.0-flash" });
    
    const prompt = `
        Generate a custom recipe with these requirements:
        - Instructions: ${instructions}
        - Dietary Preference: ${dietaryPreference}
    
        Respond in strict JSON format with:
        {
            "recipe_name": "Creative recipe name",
            "generated_content": "Detailed recipe with ingredients and steps"
        }`;
    
    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();
    
    // Clean response and parse JSON
    const cleanedText = text.replace(/```json|```/g, '').trim();
    return JSON.parse(cleanedText);
  } catch (error) {
    console.error("Gemini generation error:", error);
    throw new Error("Failed to generate recipe. Please try again.");
  }
};


//! test 
// Quick test run
(async () => {
try {
    const recipe = await exports.generateRecipe(
    "Make a vegan pasta with mushrooms and spinach.",
    "vegan"
    );

    console.log("Generated Recipe:");
    console.log(JSON.stringify(recipe, null, 2));
} catch (error) {
    console.error("Test run error:", error);
}
})();

// console.log(process.send.GEMINI_API_KEY);