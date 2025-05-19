import React from 'react';
import GenerateRecipeCard from '../CustomRecipes/generate-recipe-card';
// import ProtectedRoute from '@/components/Authentication/ProtectedRoute';
import o from './generatePage.module.css';

const GenerateRecipePage = () => {
  return (
    <div className={o.mainboxx}>
      {/* <h1 className={o.text}>Custom Recipe Generator</h1> */}
      <GenerateRecipeCard />
    </div>
  );
};

// Wrap with ProtectedRoute if you want this page to be auth-protected
export default GenerateRecipePage;
 
// Or if you want to protect it at the route level:
// export default ProtectedRoute(GenerateRecipePage);