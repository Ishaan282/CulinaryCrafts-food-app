import React from 'react';
import { Link } from 'react-router-dom';

function RecipeLinks() {
  return (
    <div>
      <h2>Recipes</h2>
      <ul>
        <li><Link to="/recipie/CheeseCake">CheeseCake</Link></li>
        <li><Link to="/recipie/ChocolateCake">ChocolateCake</Link></li>
        <li><Link to="/recipie/Soup">Soup</Link></li>
        <li><Link to="/recipie/Salads">Salads</Link></li>
        <li><Link to="/recipie/Pizza">Pizza</Link></li>
        <li><Link to="/recipie/Sushi">Sushi</Link></li>
        <li><Link to="/recipie/Pastasss">Pastasss</Link></li>
        <li><Link to="/recipie/Banana">Banana</Link></li>
        <li><Link to="/recipie/Waffels">Waffels</Link></li>
      </ul>
    </div>
  );
}

export default RecipeLinks;