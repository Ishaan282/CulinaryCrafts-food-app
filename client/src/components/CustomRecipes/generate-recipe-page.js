import React from 'react';
import GenerateRecipeCard from '../CustomRecipes/generate-recipe-card';
// import ProtectedRoute from '@/components/Authentication/ProtectedRoute';

const GenerateRecipePage = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Custom Recipe Generator</h1>
      <GenerateRecipeCard />
    </div>
  );
};

// Wrap with ProtectedRoute if you want this page to be auth-protected
export default GenerateRecipePage;

// Or if you want to protect it at the route level:
// export default ProtectedRoute(GenerateRecipePage);