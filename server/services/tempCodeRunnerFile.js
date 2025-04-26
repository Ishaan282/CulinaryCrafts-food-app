exports.generateRecipe = async (instructions, dietaryPreference) => { //passing in the parameters 
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