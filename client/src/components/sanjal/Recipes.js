// import React, { useEffect, useState } from 'react';
// import r from './Recipes.module.css';
// import { Link } from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faStar, faStarHalf } from '@fortawesome/free-solid-svg-icons';
// import axios from 'axios';

// import burger1 from './depictions-menu/burger1.jpg';
// import pasta from './depictions-menu/pasta.jpg';
// import pasta1 from './depictions-menu/pastaCover1.jpg';
// import pasta2 from './depictions-menu/pastaCover2.jpg';
// import pasta3 from './depictions-menu/pastaCover3.jpg';
// import salad from './depictions-menu/salad.jpg';
// import ccc from './depictions-menu/ccc.jpg';
// import donut from './depictions-menu/donut.jpg';
// import pizza from './depictions-menu/pizza.jpg';
// import chococover from './depictions-menu/chococover.jpg';
// import soupcover2 from './depictions-menu/soupcover (2).jpg';
// import soupcover1 from './depictions-menu/soupcover (1).jpg';
// import waffel from './depictions-menu/waffel (2).jpg';
// import crembrule from './depictions-menu/crembrule.jpeg';
// import banana from './depictions-menu/banana.jpg';
// import risoto from './depictions-menu/risoto.jpg';
// import crep from './depictions-menu/crep.jpg';
// import sushi from './depictions-menu/sushi.jpeg';

// // Reusable Dish Component
// const Dish = ({ name, image, link, starsCount, id, toggleBookmark, bookmarks }) => {
//   const fullStars = Math.floor(starsCount); // Full stars
//   const hasHalfStar = starsCount % 1 !== 0; // Check for half star

//   return (
//     <div className={`${r.dish} ${r.sweet}`}>
//       <Link to={link}>
//         <img src={image} className={r.imgDish} alt={name} />
//         <div className={r.nameDish}>{name}</div>
//       </Link>
//       <div className={r.extra}>
//         <div className={r.stars}>
//           {[...Array(fullStars)].map((_, idx) => (
//             <FontAwesomeIcon key={idx} icon={faStar} />
//           ))}
//           {hasHalfStar && <FontAwesomeIcon icon={faStarHalf} />}
//         </div>
//         <div className={r.bookmarkDiv}>
//           <button className={r.bookmark}>
//             <i
//               className={`fa-bookmark ${bookmarks.includes(id) ? 'fa-solid' : 'fa-regular'}`}
//               onClick={() => toggleBookmark(id)} // Toggle bookmark
//             />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Recipes = () => {
//   const [bookmarks, setBookmarks] = useState([]); // for bookmarks

//   // Define dishesData inside the component function
//   const dishesData = [
//     {
//       category: 'Deserts',
//       dishes: [
//         { link: '/recipie/CheeseCake', image: ccc, name: 'Baked CheeseCake', starsCount: 4.5, id: 'cheese-cake-id', bookmark: false },
//         { link: '/recipie/ChocolateCake', image: chococover, name: 'Chocolate Cake', starsCount: 5, id: 'chocolate-cake-id', bookmark: false },
//         { link: '/recipie/Crembrule', image: crembrule, name: 'Crembrule', starsCount: 4.5, id: 'crembrule-id', bookmark: false },
//         { link: '/recipie/Banana', image: banana, name: 'Banana Sunday', starsCount: 5, id: 'banana-sunday-id', bookmark: false },
//         { link: '/recipie/Waffels', image: waffel, name: 'Waffels', starsCount: 5, id: 'waffels-id', bookmark: false },
//         { link: '/recipie/Doughnuts', image: donut, name: 'Doughnuts', starsCount: 5, id: 'doughnuts-id', bookmark: false },
//       ]
//     },
//     {
//       category: 'Pastas',
//       dishes: [
//         { link: '/recipie/Pastasss', image: pasta, name: 'Spinach-Corn Ravioli', starsCount: 4.5, id: 'spinach-corn-ravioli-id' },
//         { link: '/recipie/Pastasss', image: pasta1, name: 'Pesto', starsCount: 4.5, id: 'pesto-id', bookmark: false },
//         { link: '/recipie/Pastasss', image: pasta2, name: 'Alfredo Fettuccine', starsCount: 4.5, id: 'alfredo-fettuccine-id', bookmark: false },
//         { link: '/recipie/Pastasss', image: pasta3, name: 'Arrabbiata', starsCount: 4.5, id: 'arrabbiata-id', bookmark: false },
//         { link: '/recipie/Pastasss', image: pasta, name: 'Aglio e Olio', starsCount: 4.5, id: 'aglio-e-olio-id', bookmark: false },
//         { link: '/recipie/Pastasss', image: pasta1, name: 'Four Cheese Sauce', starsCount: 4.5, id: 'four-cheese-sauce-id', bookmark: false },
//       ]
//     },
//     {
//       category: 'Soups',
//       dishes: [
//         { link: '/recipie/SpinachWhiteBeanSoup', image: soupcover2, name: 'Spinach and White Bean Soup', starsCount: 4.5, id: 'spinach-white-bean-soup-id', bookmark: false },
//         { link: '/recipie/ThaiCoconutCurrySoup', image: soupcover1, name: 'Thai Coconut Curry Soup', starsCount: 3, id: 'thai-coconut-curry-soup-id', bookmark: false },
//         { link: '/recipie/LentilSoup', image: soupcover2, name: 'Lentil Soup', starsCount: 4, id: 'lentil-soup-id', bookmark: false },
//       ]
//     },
//     {
//       category: 'Vegetarian',
//       dishes: [
//         { link: '/recipie/MushroomRisotto', image: risoto, name: 'Mushroom Risotto', starsCount: 4.5, id: 'mushroom-risotto-id', bookmark: false },
//         { link: '/recipie/VeggieBurger', image: burger1, name: 'Veggie Burger', starsCount: 4, id: 'veggie-burger-id', bookmark: false },
//         { link: '/recipie/AlfredoFutticini', image: pasta3, name: 'Alfredo Futticini', starsCount: 3, id: 'alfredo-futticini-id', bookmark: false },
//         { link: '/recipie/FalafelWrap', image: crep, name: 'Falafel Wrap', starsCount: 4.5, id: 'falafel-wrap-id', bookmark: false },
//         { link: '/recipie/VegetarianSushiRolls', image: sushi, name: 'Vegetarian Sushi Rolls', starsCount: 4.5, id: 'vegetarian-sushi-rolls-id', bookmark: false },
//       ]
//     }
//   ];


//   // bookmark  /////////////////////////////////////////////   BOOKMARK   /////////////////////////////////////////////////////
//   const toggleBookmark = (dishId) => {
//     setBookmarks((prevBookmarks) => {
//       const isBookmarked = prevBookmarks.includes(dishId);
  
//       if (isBookmarked) {
//         // Remove bookmark
//         axios.delete(`/api/recipes/dishes/${dishId}/bookmark`)
//           .then(response => {
//             console.log('Bookmark removed');
//           })
//           .catch(error => console.error('Error removing bookmark:', error));
  
//         return prevBookmarks.filter(id => id !== dishId);
//       } else {
//         // Add bookmark
//         axios.post(`/api/recipes/dishes/${dishId}/bookmark`)
//           .then(response => {
//             console.log('Bookmark added');
//           })
//           .catch(error => console.error('Error adding bookmark:', error));
  
//         return [...prevBookmarks, dishId];
//       }
//     });
//   };
  
//   // getting dishes and their bookmark status from the backend
//   // useEffect(() => {
//   //   axios.get('/api/recipes')
//   //     .then(response => {
//   //       const dishes = response.data.flatMap(recipe => recipe.dishes);
//   //       setBookmarks(dishes.filter(dish => dish.bookmarked).map(dish => dish.id));
//   //     })
//   //     .catch(error => console.error('Error fetching dishes:', error));
//   // }, []);

//   useEffect(() => {
//     axios.get('/api/recipes')
//       .then(response => {
//         const dishes = response.data.flatMap(recipe => recipe.dishes);
//         // Extract the dishes that are bookmarked
//         setBookmarks(dishes.filter(dish => dish.bookmarked).map(dish => dish.id));
//       })
//       .catch(error => console.error('Error fetching dishes:', error));
//   }, []);
  


//   // Make a POST request to save the recipes
//   useEffect(() => {
//     axios.post('/Recipe/todo/api/recipes', dishesData)
//       .then(response => {
//         console.log('Recipes saved successfully:', response.data);
//       })
//       .catch(error => {
//         console.error('Error saving recipes:', error);
//       });
//   }, []); // Ensure the effect runs once after the component mounts

//   return (
//     <div className={r.main}>
//       <div className={r.searchbar}> {/* Search bar */}
//         <input
//           type="text"
//           placeholder="Search for dishes..."
//           className={r.searchInput}
//         />
//       </div>
//       {dishesData.map((categoryData, index) => (
//         <div key={index} className={r.mainMenu}>
//           <h1 className={r.hi}>{categoryData.category}</h1>
//           <div className={r.dishesContainer}>
//             {categoryData.dishes.map((dish, dishIndex) => (
//               <Dish
//                 key={dishIndex}
//                 {...dish}
//                 toggleBookmark={toggleBookmark}
//                 bookmarks={bookmarks}
//               />
//             ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Recipes;





import React, { useEffect, useState } from 'react';
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
const Dish = ({ name, image, link, starsCount, id, toggleBookmark, isBookmarked }) => {
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
            <i
              className={`fa-bookmark ${isBookmarked ? 'fa-solid' : 'fa-regular'}`}
              onClick={() => toggleBookmark(id, isBookmarked)} 
            />
          </button>
        </div>
      </div>
    </div>
  );
};

const Recipes = () => {
  const [bookmarks, setBookmarks] = useState([]); // For storing bookmarked dish IDs

  // Define dishesData inside the component function
  const dishesData = [
    {
      category: 'Deserts',
      dishes: [
        { link: '/recipie/CheeseCake', image: ccc, name: 'Baked CheeseCake', starsCount: 4.5, id: 'cheese-cake-id' },
        { link: '/recipie/ChocolateCake', image: chococover, name: 'Chocolate Cake', starsCount: 5, id: 'chocolate-cake-id' },
        { link: '/recipie/Crembrule', image: crembrule, name: 'Crembrule', starsCount: 4.5, id: 'crembrule-id' },
        { link: '/recipie/Banana', image: banana, name: 'Banana Sunday', starsCount: 5, id: 'banana-sunday-id' },
        { link: '/recipie/Waffels', image: waffel, name: 'Waffels', starsCount: 5, id: 'waffels-id' },
        { link: '/recipie/Doughnuts', image: donut, name: 'Doughnuts', starsCount: 5, id: 'doughnuts-id' },
      ]
    },
    {
      category: 'Pastas',
      dishes: [
        { link: '/recipie/Pastasss', image: pasta, name: 'Spinach-Corn Ravioli', starsCount: 4.5, id: 'spinach-corn-ravioli-id' },
        { link: '/recipie/Pastasss', image: pasta1, name: 'Pesto', starsCount: 4.5, id: 'pesto-id' },
        { link: '/recipie/Pastasss', image: pasta2, name: 'Alfredo Fettuccine', starsCount: 4.5, id: 'alfredo-fettuccine-id' },
        { link: '/recipie/Pastasss', image: pasta3, name: 'Arrabbiata', starsCount: 4.5, id: 'arrabbiata-id' },
        { link: '/recipie/Pastasss', image: pasta, name: 'Aglio e Olio', starsCount: 4.5, id: 'aglio-e-olio-id' },
        { link: '/recipie/Pastasss', image: pasta1, name: 'Four Cheese Sauce', starsCount: 4.5, id: 'four-cheese-sauce-id' },
      ]
    },
    {
      category: 'Soups',
      dishes: [
        { link: '/recipie/SpinachWhiteBeanSoup', image: soupcover2, name: 'Spinach and White Bean Soup', starsCount: 4.5, id: 'spinach-white-bean-soup-id' },
        { link: '/recipie/ThaiCoconutCurrySoup', image: soupcover1, name: 'Thai Coconut Curry Soup', starsCount: 3, id: 'thai-coconut-curry-soup-id' },
        { link: '/recipie/LentilSoup', image: soupcover2, name: 'Lentil Soup', starsCount: 4, id: 'lentil-soup-id' },
      ]
    },
    {
      category: 'Vegetarian',
      dishes: [
        { link: '/recipie/MushroomRisotto', image: risoto, name: 'Mushroom Risotto', starsCount: 4.5, id: 'mushroom-risotto-id' },
        { link: '/recipie/VeggieBurger', image: burger1, name: 'Veggie Burger', starsCount: 4, id: 'veggie-burger-id' },
        { link: '/recipie/AlfredoFutticini', image: pasta3, name: 'Alfredo Futticini', starsCount: 3, id: 'alfredo-futticini-id' },
        { link: '/recipie/FalafelWrap', image: crep, name: 'Falafel Wrap', starsCount: 4.5, id: 'falafel-wrap-id' },
        { link: '/recipie/VegetarianSushiRolls', image: sushi, name: 'Vegetarian Sushi Rolls', starsCount: 4.5, id: 'vegetarian-sushi-rolls-id' },
      ]
    }
  ];

  // Handle toggling the bookmark status (via PATCH API call)
  const toggleBookmark = async (dishId, isBookmarked) => {
    try {
      const response = await axios.patch(`/api/recipes/dishes/${dishId}/bookmark`, { userId: 'some-user-id' });  // Pass the userId here
      if (response.status === 200) {
        setBookmarks((prevBookmarks) => {
          if (isBookmarked) {
            return prevBookmarks.filter(id => id !== dishId); // Remove from bookmarks if already bookmarked
          } else {
            return [...prevBookmarks, dishId]; // Add to bookmarks if not bookmarked
          }
        });
      }
    } catch (error) {
      console.error('Error toggling bookmark:', error);
    }
  };

  // Fetch the bookmarks from the backend on component mount
  useEffect(() => {
    axios.get('/api/recipes')
      .then(response => {
        const dishes = response.data.flatMap(recipe => recipe.dishes);
        const bookmarkedDishes = dishes.filter(dish => dish.bookmarked).map(dish => dish.id);
        setBookmarks(bookmarkedDishes);
      })
      .catch(error => console.error('Error fetching dishes:', error));
  }, []);

  return (
    <div className={r.main}>
      <div className={r.searchbar}>
        <input
          type="text"
          placeholder="Search for dishes..."
          className={r.searchInput}
        />
      </div>
      {dishesData.map((categoryData, index) => (
        <div key={index} className={r.mainMenu}>
          <h1 className={r.hi}>{categoryData.category}</h1>
          <div className={r.dishesContainer}>
            {categoryData.dishes.map((dish, dishIndex) => (
              <Dish
                key={dishIndex}
                {...dish}
                toggleBookmark={toggleBookmark}
                isBookmarked={bookmarks.includes(dish.id)}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recipes;
