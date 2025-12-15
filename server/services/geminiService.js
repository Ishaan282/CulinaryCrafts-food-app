const { GoogleGenerativeAI } = require("@google/generative-ai");
require('dotenv').config({ path: require('path').resolve(__dirname, '../.env') });

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
// console.log(process.env.GEMINI_API_KEY)

exports.generateRecipe = async (instructions, dietaryPreference) => {
  try {
    const model = genAI.getGenerativeModel({ model: "gemini-2.5-flash" });// Updated model

    const prompt = `
    Generate a recipe in MARKDOWN FORMAT (no JSON) with:
    - Instructions: ${instructions}
    - Dietary Preference: ${dietaryPreference}
    
    Format strictly as:
    # Recipe Name
    ## Description
    [Brief description]
    
    ## Ingredients
    - Item 1 (quantity)
    - Item 2 (quantity)
    
    ## Instructions
    1. Step 1
    2. Step 2
    
    ## Notes
    [Optional tips]
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text(); // Return raw Markdown string
  } catch (error) {
    console.error("Gemini error:", error);
    throw new Error("Failed to generate recipe. Try simpler instructions.");
  }
};


//! testing the pipeline 
// (async () => {
//   try {
//     const recipe = await exports.generateRecipe(
//       "Make a vegan pasta with mushrooms and spinach.",
//       "vegan"
//     );

//     console.log("Generated Recipe:");
//     console.log(recipe); // Just print the raw Markdown string
//   } catch (error) {
//     console.error("Test run error:", error);
//   }
// })();