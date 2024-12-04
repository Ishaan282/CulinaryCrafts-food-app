import React, { useEffect } from 'react'; // Import useEffect here
import r from './Recipes.module.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';

import burger1 from './depictions-menu/burger1.jpg';
import pasta from './depictions-menu/pasta.jpg';
import pasta1 from './depictions-menu/pastaCover1.jpg';
import pasta2 from './depictions-menu/pastaCover2.jpg';
import pasta3 from './depictions-menu/pastaCover3.jpg';
import salad from './depictions-menu/salad.jpg';
import ccc from './depictions-menu/ccc.jpg';
import donut from './depictions-menu/donut.jpg';
import pizza from './depictions-menu/pizza.jpg';
import chococover from './depictions-menu/chococover.jpg';
import soupcover2 from './depictions-menu/soupcover (2).jpg';
import soupcover1 from './depictions-menu/soupcover (1).jpg';
import waffel from './depictions-menu/waffel (2).jpg';
import crembrule from './depictions-menu/crembrule.jpeg';
import banana from './depictions-menu/banana.jpg';
import risoto from './depictions-menu/risoto.jpg';
import crep from './depictions-menu/crep.jpg';
import sushi from './depictions-menu/sushi.jpeg';

// Reusable Dish Component
const Dish = ({ link, image, name, starsCount }) => {
  const fullStars = Math.floor(starsCount); // Full stars
  const hasHalfStar = starsCount % 1 !== 0; // Check for half star

  return (
    <div className={`${r.dish} ${r.sweet}`}>
      <Link to={link}>
        <img src={image} className={r.imgDish} alt={name} />
        <div className={r.nameDish}>{name}</div>
      </Link>
      <div className={r.extra}>
        <div className={r.stars}>
          {[...Array(fullStars)].map((_, idx) => (
            <FontAwesomeIcon key={idx} icon={faStar} />
          ))}
          {hasHalfStar && <FontAwesomeIcon icon={faStarHalf} />}
        </div>
        <div className={r.bookmarkDiv}>
          <button className={r.bookmark}>
            <i className="fa-regular fa-bookmark"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

const Recipes = () => {
  // Define dishesData inside the component function
  const dishesData = [
    {
      category: 'Deserts',
      dishes: [
        { link: '/recipie/CheeseCake', image: ccc, name: 'Baked CheeseCake', starsCount: 4.5 },
        { link: '/recipie/ChocolateCake', image: chococover, name: 'Chocolate Cake', starsCount: 5 },
        { link: '/recipie/Crembrule', image: crembrule, name: 'Crembrule', starsCount: 4.5 },
        { link: '/recipie/Banana', image: banana, name: 'Banana Sunday', starsCount: 5 },
        { link: '/recipie/Waffels', image: waffel, name: 'Waffels', starsCount: 5 },
        { link: '/recipie/Doughnuts', image: donut, name: 'Doughnuts', starsCount: 5 },
      ]
    },
    {
      category: 'Pastas',
      dishes: [
        { link: '/recipie/Pastasss', image: pasta, name: 'Spinach-Corn Ravioli', starsCount: 4.5 },
        { link: '/recipie/Pastasss', image: pasta1, name: 'Pesto', starsCount: 4.5 },
        { link: '/recipie/Pastasss', image: pasta2, name: 'Alfredo Fettuccine', starsCount: 4.5 },
        { link: '/recipie/Pastasss', image: pasta3, name: 'Arrabbiata', starsCount: 4.5 },
        { link: '/recipie/Pastasss', image: pasta, name: 'Aglio e Olio', starsCount: 4.5 },
        { link: '/recipie/Pastasss', image: pasta1, name: 'Four Cheese Sauce', starsCount: 4.5 },
      ]
    },
    {
      category: 'Soups',
      dishes: [
        { link: '/recipie/SpinachWhiteBeanSoup', image: soupcover2, name: 'Spinach and White Bean Soup', starsCount: 4.5 },
        { link: '/recipie/ThaiCoconutCurrySoup', image: soupcover1, name: 'Thai Coconut Curry Soup', starsCount: 3 },
        { link: '/recipie/LentilSoup', image: soupcover2, name: 'Lentil Soup', starsCount: 4 },
      ]
    },
    {
      category: 'Vegetarian',
      dishes: [
        { link: '/recipie/MushroomRisotto', image: risoto, name: 'Mushroom Risotto', starsCount: 4.5 },
        { link: '/recipie/VeggieBurger', image: burger1, name: 'Veggie Burger', starsCount: 4 },
        { link: '/recipie/AlfredoFutticini', image: pasta3, name: 'Alfredo Futticini', starsCount: 3 },
        { link: '/recipie/FalafelWrap', image: crep, name: 'Falafel Wrap', starsCount: 4.5 },
        { link: '/recipie/VegetarianSushiRolls', image: sushi, name: 'Vegetarian Sushi Rolls', starsCount: 4.5 },
      ]
    }
  ];

  // useEffect is now inside the component function, correctly using dishesData
  useEffect(() => {
    // Make a POST request to save the recipes
    axios.post('http://localhost:5000/api/recipes', dishesData)
      .then(response => {
        console.log('Recipes saved successfully:', response.data);
      })
      .catch(error => {
        console.error('Error saving recipes:', error);
      });
  }, []); // Ensure the effect runs once after the component mounts

  return (
    <div className={r.main}>
      {dishesData.map((categoryData, index) => (
        <div key={index} className={r.mainMenu}>
          <h1 className={r.hi}>{categoryData.category}</h1>
          <div className={r.dishesContainer}>
            {categoryData.dishes.map((dish, dishIndex) => (
              <Dish key={dishIndex} {...dish} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recipes;
