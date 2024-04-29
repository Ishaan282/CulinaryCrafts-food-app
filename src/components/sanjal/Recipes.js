import React from 'react';
import { Link } from 'react-router-dom';
import r from './style.module.css'; 

// Import images for the recipes
import fruitcakeImage from './fruitcakepic.jpg';
import pastaImage from './pasta.jpg';
import saladImage from './salad.jpg';
import burgerImage from './burger.jpg'
import Fruitcake from './Fruitcake';function RecipeBox({ category, name, rating, image, link }) {
  return (
    <div className={r
  .recipeBox}>
      <Link to={link} className={r
      .link}>
        <img src={image} alt={name} className={r
        .recipeImage} />
        <p className={r
        .dessert}>{category}</p>
        <p className={r
        .name}>{name}</p>
        <div className={r
        .rating}>
          {[...Array(rating).keys()].map((index) => (
            <span key={index} className={r
            .star}></span>
          ))}
          {[...Array(5 - rating).keys()].map((index) => (
            <span key={index} className={r
            .starEmpty}></span>
          ))}
          <span className={r
          .ratingNumber}>{rating}</span>
        </div>
      </Link>
    </div>
  );
}

function Recipes() {
  const recipes = [
    { category: "Dessert", name: "Fruit Cake", rating: 4, image: fruitcakeImage, link: "/Fruitcake" },
    { category: "Pasta", name: "Mixed Salad", rating: 3, image: pastaImage, link: "/Fruitcake" },
    { category: "Salads", name: "Pasta", rating: 5, image: saladImage, link: "/Fruitcake" },
    { category: "Main Dish", name: "Burger", rating: 5, image: burgerImage, link: "/Fruitcake" },
    
  ];

  return (
    <div className={r
  .recipeContainer}>
      {[...Array(4).keys()].map((line) => (
        <div key={line} className={r
      .line}>
          {recipes.slice(line * 4, (line + 1) * 4).map((recipe, index) => (
            <div key={index} className={r
          .horizontalLine}>
              <RecipeBox
                category={recipe.category}
                name={recipe.name}
                rating={recipe.rating}
                image={recipe.image}
                link={recipe.link}
              />
              <RecipeBox
                category={recipe.category}
                name={recipe.name}
                rating={recipe.rating}
                image={recipe.image}
                link={recipe.link}
              />
              <RecipeBox
                category={recipe.category}
                name={recipe.name}
                rating={recipe.rating}
                image={recipe.image}
                link={recipe.link}
              />
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export default Recipes;
