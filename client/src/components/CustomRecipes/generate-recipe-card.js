import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faSpinner, 
  faTrash, 
  faEye,
  faSignInAlt,
  faUtensils
} from '@fortawesome/free-solid-svg-icons';
import MDEditor from '@uiw/react-md-editor';
import { toast } from 'sonner';
import { useAuth } from '../Authentication/context/AuthContext';
import { useNavigate } from 'react-router-dom';
import g from './generate.module.css';

const GenerateRecipeCard = () => {
  const { user } = useAuth();
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [prompt, setPrompt] = useState('');
  const [dietaryPreference, setDietaryPreference] = useState('vegetarian');
  const [loading, setLoading] = useState(false);
  const [recipeContent, setRecipeContent] = useState('');
  const [savedRecipes, setSavedRecipes] = useState([]);

  // Fetch user's saved recipes
  useEffect(() => {
    if (user?.username) {
      fetchRecipes();
    }
  }, [user]);

  const fetchRecipes = async () => {
    try {
      const response = await fetch(`/api/recipes/custom?username=${user.username}`);
      const data = await response.json();
      if (data.success) {
        setSavedRecipes(data.data);
      }
    } catch (error) {
      toast.error('Failed to load recipes');
    }
  };
const handleGenerate = async (e) => {
  e.preventDefault();
  
  if (!user) {
    toast.error('Please login to generate recipes');
    navigate('/login');
    return;
  }

  if (!prompt) {
    toast.error('Please describe your recipe idea');
    return;
  }

  setLoading(true);
  setRecipeContent('');
  
  try {
    const response = await fetch('/api/recipes/custom', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        instructions: prompt,
        dietaryPreference,
        username: user.username
      })
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    
    if (data.success) {
      setRecipeContent(data.data.generated_content);
      setOpen(true);
      fetchRecipes();
      toast.success('Recipe generated successfully!');
    } else {
      throw new Error(data.message || 'Failed to generate recipe');
    }
  } catch (error) {
    console.error('Generation error:', error);
    toast.error(error.message || 'Failed to generate recipe. Please try again.');
  } finally {
    setLoading(false);
  }
};
  /*const handleGenerate = async (e) => {
    e.preventDefault();
    
    if (!user) {
      toast.error('Please login to generate recipes');
      navigate('/login');
      return;
    }

    if (!prompt) {
      toast.error('Please describe your recipe idea');
      return;
    }

    setLoading(true);
    
    try {
      const response = await fetch('/api/recipes/custom', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          instructions: prompt,
          dietaryPreference,
          username: user.username
        })
      });

      const data = await response.json();
      
      if (data.success) {
        setRecipeContent(data.data.generated_content);
        setOpen(true);
        fetchRecipes();
        toast.success('Recipe generated successfully!');
        setPrompt('');
      } else {
        toast.error(data.message || 'Failed to generate recipe');
      }
    } catch (error) {
      toast.error('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };*/

  const handleDelete = async (recipeId) => {
    if (window.confirm('Are you sure you want to delete this recipe?')) {
      try {
        const response = await fetch(`/api/recipes/custom/${recipeId}`, {
          method: 'DELETE',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ username: user.username })
        });

        const data = await response.json();
        
        if (data.success) {
          toast.success('Recipe deleted successfully');
          fetchRecipes();
        } else {
          toast.error(data.message || 'Failed to delete recipe');
        }
      } catch (error) {
        toast.error('Network error. Please try again.');
      }
    }
  };
//-----------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------
//-----------------------------------------------------------------------------------------------------------------------------------------
  return (
    <div className={g.mainbox}>
      {/* Recipe Generation Card */}
      <div className={g.grnerate}>
        <div className="mb-6">
          <h2 className={g.text}>
            <FontAwesomeIcon icon={faUtensils} className="text-orange-500" />
            Create Custom Recipe
          </h2>
        </div>
        <form onSubmit={handleGenerate} className="space-y-4">
          <textarea
            placeholder="Describe your recipe idea (e.g., 'Make me a quick vegan pasta with mushrooms')"
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            rows={4}
            className={g.textarea}
          />
          
          <div className={g.dontknow}>
            <select
              value={dietaryPreference}
              onChange={(e) => setDietaryPreference(e.target.value)}
              className={g.dropbox}
            >
              <option value="vegetarian">Vegetarian</option>
              <option value="vegan">Vegan</option>
              <option value="non-vegetarian">Non-Vegetarian</option>
              <option value="flexitarian">Flexitarian</option>
            </select>
            
            <button
              type="submit"
              disabled={loading || !user}
              className={g.createbutton}
            >
              {loading ? (
                <>
                  <FontAwesomeIcon icon={faSpinner} className="animate-spin" />
                  Generating...
                </>
              ) : (
                'Generate Recipe'
              )}
            </button>
          </div>
          {!user && (
            <p className="text-sm text-red-500 flex items-center gap-1">
              <FontAwesomeIcon icon={faSignInAlt} />
              Please login to generate and save recipes
            </p>
          )}
        </form>
      </div>

      {/* Generated Recipe Preview Modal */}
      {open && (
        <div className={g.preview}>
          <div className="bg-white rounded-lg max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-4">
                <h2 className="text-2xl font-bold text-gray-800">Your Custom Recipe</h2>
                <button 
                  onClick={() => setOpen(false)}
                  className={g.cross}>
                  
                </button>
              </div>
              <div className={g.lordknows}>
                <MDEditor.Markdown 
                  source={recipeContent} 
                  className="bg-white p-4 rounded-md"
                />
              </div>
              <div className="flex justify-end gap-2 mt-4">
                <button
                  onClick={() => setOpen(false)}
                  className={`${g.closebox} ${g.recepiebutton}`}>
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Saved Recipes Section */}
      <div className={g.saved}>
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-800">Your Saved Recipes</h2>
        </div>
        {!user ? (
          <div className="text-center py-8">
            <p className="text-gray-500 mb-4 flex items-center justify-center gap-2">
              <FontAwesomeIcon icon={faSignInAlt} />
              Please login to view your saved recipes
            </p>
            <button 
              onClick={() => navigate('/login')}
              className="px-4 py-2 bg-orange-500 text-white rounded-md hover:bg-orange-600 transition-colors"
            >
              Login
            </button>
          </div>
        ) : savedRecipes.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500">No saved recipes yet</p>
            <p className="text-sm text-gray-400 mt-2">
              Generate your first recipe above!
            </p>
          </div>
        ) : (
          <div className="space-y-4">
            {savedRecipes.map((recipe) => (
              <div key={recipe._id} className="border border-gray-200 rounded-lg p-4 hover:bg-gray-50 transition-colors">
                <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div className="flex-1">
                    <h3 className="font-medium text-lg text-gray-800">{recipe.recipe_name}</h3>
                    <div className="flex flex-wrap gap-2 mt-1">
                      <span className="text-xs px-2 py-1 bg-gray-100 rounded-full capitalize">
                        {recipe.dietary_preference}
                      </span>
                      <span className="text-xs text-gray-400">
                        {new Date(recipe.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <button
                      onClick={() => {
                        setRecipeContent(recipe.generated_content);
                        setOpen(true);
                      }}
                      className={`${g.delete} ${g.savedbutton}`}>
                      <FontAwesomeIcon icon={faEye} className="text-gray-600" />
                      View
                    </button>
                    <button
                      onClick={() => handleDelete(recipe._id)}
                      className={`${g.delete} ${g.savedbutton}`}>
                      <FontAwesomeIcon icon={faTrash} />
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default GenerateRecipeCard;