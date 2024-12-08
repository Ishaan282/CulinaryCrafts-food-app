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


// const Dish = ({ name, image, link, starsCount, id, toggleBookmark, bookmarks }) => {
//   const fullStars = Math.floor(starsCount);
//   const hasHalfStar = starsCount % 1 !== 0; 

//   const isBookmarked = bookmarks.includes(id);


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
//           <button className={r.bookmark} onClick={() => toggleBookmark(id)}>
//             <i className={`fa-${isBookmarked ? 'solid' : 'regular'} fa-bookmark`}></i>
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// const Recipes = () => {
//   const [bookmarks, setBookmarks] = useState([]); // For storing bookmarks fetched from MongoDB

//   // Toggle bookmark function
//   const toggleBookmark = async (id) => {
//     if (bookmarks.includes(id)) {
//       // Remove bookmark from backend
//       try {
//         await axios.delete(`/Recipe/${id}`);  // Delete from backend
//         setBookmarks((prevBookmarks) => prevBookmarks.filter((bookmarkId) => bookmarkId !== id)); // Remove from frontend
//       } catch (error) {
//         console.error('Error removing bookmark:', error);
//       }
//     } else {
//       // Add bookmark to backend
//       try {
//         await axios.post('/Recipe', { id });  // Add to backend
//         setBookmarks((prevBookmarks) => [...prevBookmarks, id]); // Add to frontend
//       } catch (error) {
//         console.error('Error adding bookmark:', error);
//       }
//     }
//   };

//   // Fetch bookmarks from backend
//   useEffect(() => {
//     const fetchBookmarks = async () => {
//       try {
//         const response = await axios.get('/Recipe');
//         setBookmarks(response.data.bookmarks); // Assuming the API returns an array of bookmarked dish IDs
//       } catch (error) {
//         console.error('Error fetching bookmarks:', error);
//       }
//     };

//     fetchBookmarks();
//   }, []);

//   // Static data 
//   const dishesData = [
//     {
//       category: 'Deserts',
//       dishes: [
//         { link: '/recipie/CheeseCake', image: ccc, name: 'Baked CheeseCake', starsCount: 4.5, id: 'cheese-cake-id' },
//         { link: '/recipie/ChocolateCake', image: chococover, name: 'Chocolate Cake', starsCount: 5, id: 'chocolate-cake-id' },
//         { link: '/recipie/Crembrule', image: crembrule, name: 'Crembrule', starsCount: 4.5, id: 'crembrule-id' },
//         { link: '/recipie/Banana', image: banana, name: 'Banana Sunday', starsCount: 5, id: 'banana-sunday-id' },
//         { link: '/recipie/Waffels', image: waffel, name: 'Waffels', starsCount: 5, id: 'waffels-id' },
//         { link: '/recipie/Doughnuts', image: donut, name: 'Doughnuts', starsCount: 5, id: 'doughnuts-id' },
//       ]
//     },
//     {
//       category: 'Pastas',
//       dishes: [
//         { link: '/recipie/Pastasss', image: pasta, name: 'Spinach-Corn Ravioli', starsCount: 4.5, id: 'spinach-corn-ravioli-id' },
//         { link: '/recipie/Pastasss', image: pasta1, name: 'Pesto', starsCount: 4.5, id: 'pesto-id' },
//         { link: '/recipie/Pastasss', image: pasta2, name: 'Alfredo Fettuccine', starsCount: 4.5, id: 'alfredo-fettuccine-id' },
//         { link: '/recipie/Pastasss', image: pasta3, name: 'Arrabbiata', starsCount: 4.5, id: 'arrabbiata-id' },
//         { link: '/recipie/Pastasss', image: pasta, name: 'Aglio e Olio', starsCount: 4.5, id: 'aglio-e-olio-id' },
//         { link: '/recipie/Pastasss', image: pasta1, name: 'Four Cheese Sauce', starsCount: 4.5, id: 'four-cheese-sauce-id' },
//       ]
//     },
//     {
//       category: 'Soups',
//       dishes: [
//         { link: '/recipie/SpinachWhiteBeanSoup', image: soupcover2, name: 'Spinach and White Bean Soup', starsCount: 4.5, id: 'spinach-white-bean-soup-id' },
//         { link: '/recipie/ThaiCoconutCurrySoup', image: soupcover1, name: 'Thai Coconut Curry Soup', starsCount: 3, id: 'thai-coconut-curry-soup-id' },
//         { link: '/recipie/LentilSoup', image: soupcover2, name: 'Lentil Soup', starsCount: 4, id: 'lentil-soup-id' },
//       ]
//     },
//     {
//       category: 'Vegetarian',
//       dishes: [
//         { link: '/recipie/MushroomRisotto', image: risoto, name: 'Mushroom Risotto', starsCount: 4.5, id: 'mushroom-risotto-id' },
//         { link: '/recipie/VeggieBurger', image: burger1, name: 'Veggie Burger', starsCount: 4, id: 'veggie-burger-id' },
//         { link: '/recipie/AlfredoFutticini', image: pasta3, name: 'Alfredo Futticini', starsCount: 3, id: 'alfredo-futticini-id' },
//         { link: '/recipie/FalafelWrap', image: crep, name: 'Falafel Wrap', starsCount: 4.5, id: 'falafel-wrap-id' },
//         { link: '/recipie/VegetarianSushiRolls', image: sushi, name: 'Vegetarian Sushi Rolls', starsCount: 4.5, id: 'vegetarian-sushi-rolls-id' },
//       ]
//     }
//   ];

//   return (
//     <div className={r.main}>
//       {dishesData.map((categoryData, index) => (
//         <div key={index} className={r.mainMenu}>
//           <h1 className={r.hi}>{categoryData.category}</h1>
//           <div className={r.dishesContainer}>
//             {categoryData.dishes.map((dish, dishIndex) => (
//               <Dish
//                 key={dish.id}
//                 {...dish}
//                 toggleBookmark={toggleBookmark}
//                 bookmarks={bookmarks}  // Pass the bookmark state to each dish
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


const Dish = ({ name, image, link, starsCount, id, toggleBookmark, bookmarks }) => {
  const fullStars = Math.floor(starsCount);
  const hasHalfStar = starsCount % 1 !== 0;

  // Check if the dish is bookmarked
  const isBookmarked = bookmarks.some(bookmark => bookmark.dishId === id && bookmark.bookmarked);

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
          <button className={r.bookmark} onClick={() => toggleBookmark(id)}>
            <i className={`fa-${isBookmarked ? 'solid' : 'regular'} fa-bookmark`}></i>
          </button>
        </div>
      </div>
    </div>
  );
};


const Recipes = () => {
  const [bookmarks, setBookmarks] = useState([]); // For storing bookmarks fetched from MongoDB

// Toggle bookmark function
// Toggle bookmark function
const toggleBookmark = async (id) => {
  try {
    const response = await axios.post('/Recipe', { id });
    const updatedBookmarkStatus = response.data.bookmarked;  // Get updated bookmark status

    // Update the frontend state based on the response
    setBookmarks(prevBookmarks => 
      prevBookmarks.map(bookmark => 
        bookmark.dishId === id ? { ...bookmark, bookmarked: updatedBookmarkStatus } : bookmark
      )
    );
  } catch (error) {
    console.error('Error toggling bookmark:', error);
  }
};




  // Fetch bookmarks from backend
// Fetch bookmarks from backend
useEffect(() => {
  const fetchBookmarks = async () => {
    try {
      const response = await axios.get('/Recipe');
      setBookmarks(response.data.bookmarks); // Assuming the API returns an array of { dishId, bookmarked }
    } catch (error) {
      console.error('Error fetching bookmarks:', error);
    }
  };

  fetchBookmarks();
}, []);


  // Static data 
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

  return (
    <div className={r.main}>
      {dishesData.map((categoryData, index) => (
        <div key={index} className={r.mainMenu}>
          <h1 className={r.hi}>{categoryData.category}</h1>
          <div className={r.dishesContainer}>
            {categoryData.dishes.map((dish, dishIndex) => (
              <Dish
                key={dish.id}
                {...dish}
                toggleBookmark={toggleBookmark}
                bookmarks={bookmarks}  // Pass the bookmark state to each dish
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Recipes;
