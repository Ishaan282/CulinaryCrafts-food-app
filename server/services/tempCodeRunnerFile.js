(async () => {
try {
    const recipe = await exports.generateRecipe(
    "Make a vegan pasta with mushrooms and spinach.",
    "vegan"
    );

    console.log("Generated Recipe:");
    console.log(recipe.recipe_name); 
    console.log(recipe.generated_content);
} catch (error) {
    console.error("Test run error:", error);
}
})();