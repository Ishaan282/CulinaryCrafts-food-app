import React from 'react';
import r from './Recipes.module.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBowlFood, faClock, faFire } from '@fortawesome/free-solid-svg-icons'; 
import { Link } from 'react-router-dom';

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


function Recipes() {
  return (
    <div className={r.mainMenu} >
      

      {/* Sweets */}
      <h1 className={`${r.hi}`}>Deserts</h1>
      <div className={r.sweetFood}>
      <div className={`${r.cheeseccake} ${r.sweet}`}>
        <Link to="/recipie/CheeseCake">
          {/* <div className={`${r.cheeseccake} ${r.sweet}`}> */}
            <img src={ccc} className={r.imgDish} alt="CheeseCake" />
            <div className={r.nameDish}>Baked CheeseCake</div>
            </Link>
            <div className={r.extra}>
            <div className={r.stars}>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star-half"></i>
            </div>
            <div className={r.bookmarkDiv}>
              <button className={r.bookmark}><i class="fa-regular fa-bookmark"></i></button>
            </div>
            </div>
          </div>
        

          <div className={`${r.Chocolate} ${r.sweet}`}>
  <Link to="/recipie/ChocolateCake">
    <img src={chococover} className={r.imgDish} alt="Chocolate Cake" />
    <div className={r.nameDish}>Chocolate Cake</div>
  </Link>
  <div className={r.extra}>
    <div className={r.stars}>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
    </div>
    <div className={r.bookmarkDiv}>
      <button className={r.bookmark}><i className="fa-regular fa-bookmark"></i></button>
    </div>
  </div>
</div>


<div className={`${r.Crembrule} ${r.sweet}`}>
  <Link to="/recipie/Crembrule">
    <img src={crembrule} className={r.imgDish} alt="Crembrule" />
    <div className={r.nameDish}>Crembrule</div>
  </Link>
  <div className={r.extra}>
    <div className={r.stars}>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star-half"></i>
    </div>
    <div className={r.bookmarkDiv}>
      <button className={r.bookmark}><i className="fa-regular fa-bookmark"></i></button>
    </div>
  </div>
</div>


<div className={`${r.Bannana} ${r.sweet}`}>
  <Link to="/recipie/Banana">
    <img src={banana} className={r.imgDish} alt="Banana Sunday" />
    <div className={r.nameDish}>Banana Sunday</div>
  </Link>
  <div className={r.extra}>
    <div className={r.stars}>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
    </div>
    <div className={r.bookmarkDiv}>
      <button className={r.bookmark}><i className="fa-regular fa-bookmark"></i></button>
    </div>
  </div>
</div>


<div className={`${r.Waffels} ${r.sweet}`}>
  <Link to="/recipie/Waffels">
    <img src={waffel} className={r.imgDish} alt="Waffels" />
    <div className={r.nameDish}>Waffels</div>
  </Link>
  <div className={r.extra}>
    <div className={r.stars}>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
    </div>
    <div className={r.bookmarkDiv}>
      <button className={r.bookmark}><i className="fa-regular fa-bookmark"></i></button>
    </div>
  </div>
</div>


<div className={`${r.Doughnuts} ${r.sweet}`}>
  <Link to="/recipie/Doughnuts">
    <img src={donut} className={r.imgDish} alt="Doughnuts" />
    <div className={r.nameDish}>Doughnuts</div>
  </Link>
  <div className={r.extra}>
    <div className={r.stars}>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
      <i className="fa-solid fa-star"></i>
    </div>
    <div className={r.bookmarkDiv}>
      <button className={r.bookmark}><i className="fa-regular fa-bookmark"></i></button>
    </div>
  </div>
</div>

      </div>

      {/* Pastas */}
      <h1 className={`${r.hi}`}>Pastas</h1>
      <div className={r.pastas}>
      <div className={r.pastas}>
  <div className={`${r.Ravioli} ${r.pasta}`}>
    <Link to="/recipie/Pastasss">
      <img src={pasta} className={r.imgDish} alt="Ravioli" />
      <div className={r.nameDish}>Spinach-Corn Ravioli</div>
    </Link>
    <div className={r.extra}>
      <div className={r.stars}>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star-half"></i>
      </div>
      <div className={r.bookmarkDiv}>
        <button className={r.bookmark}><i className="fa-regular fa-bookmark"></i></button>
      </div>
    </div>
  </div>
</div>


<div className={r.pastas}>
  <div className={`${r.Pesto} ${r.pasta}`}>
    <Link to="/recipie/Pastasss">
      <img src={pasta1} className={r.imgDish} alt="Pesto" />
      <div className={r.nameDish}>Pesto</div>
    </Link>
    <div className={r.extra}>
      <div className={r.stars}>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star-half"></i>
      </div>
      <div className={r.bookmarkDiv}>
        <button className={r.bookmark}><i className="fa-regular fa-bookmark"></i></button>
      </div>
    </div>
  </div>
</div>


<div className={r.pastas}>
  <div className={`${r.Alfredo} ${r.pasta}`}>
    <Link to="/recipie/Pastasss">
      <img src={pasta2} className={r.imgDish} alt="Alfredo" />
      <div className={r.nameDish}>Alfredo Fettuccine</div>
    </Link>
    <div className={r.extra}>
      <div className={r.stars}>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star-half"></i>
      </div>
      <div className={r.bookmarkDiv}>
        <button className={r.bookmark}><i className="fa-regular fa-bookmark"></i></button>
      </div>
    </div>
  </div>
</div>


<div className={r.pastas}>
  <div className={`${r.Arrabbiata} ${r.pasta}`}>
    <Link to="/recipie/Pastasss">
      <img src={pasta3} className={r.imgDish} alt="Arrabbiata" />
      <div className={r.nameDish}>Arrabbiata</div>
    </Link>
    <div className={r.extra}>
      <div className={r.stars}>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star-half"></i>
      </div>
      <div className={r.bookmarkDiv}>
        <button className={r.bookmark}><i className="fa-regular fa-bookmark"></i></button>
      </div>
    </div>
  </div>
</div>


<div className={r.pastas}>
  <div className={`${r.AglioeOlio} ${r.pasta}`}>
    <Link to="/recipie/Pastasss">
      <img src={pasta} className={r.imgDish} alt="Aglio e Olio" />
      <div className={r.nameDish}>Aglio e Olio</div>
    </Link>
    <div className={r.extra}>
      <div className={r.stars}>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star-half"></i>
      </div>
      <div className={r.bookmarkDiv}>
        <button className={r.bookmark}><i className="fa-regular fa-bookmark"></i></button>
      </div>
    </div>
  </div>
</div>


<div className={r.pastas}>
  <div className={`${r.Cheese} ${r.pasta}`}>
    <Link to="/recipie/Pastasss">
      <img src={pasta1} className={r.imgDish} alt="Four Cheese Sauce" />
      <div className={r.nameDish}>Four Cheese Sauce</div>
    </Link>
    <div className={r.extra}>
      <div className={r.stars}>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star-half"></i>
      </div>
      <div className={r.bookmarkDiv}>
        <button className={r.bookmark}><i className="fa-regular fa-bookmark"></i></button>
      </div>
    </div>
  </div>
</div>

      </div>

      {/* soups  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <h1 className={`${r.hi}`}>Soups</h1>
      <div className={r.soups}>
      <div className={r.salads}>
  <div className={`${r.CaesarS} ${r.salad}`}>
    <Link to="/Salads">
      <img src={salad} className={r.imgDish} alt="Caesar Salad" />
      <div className={r.nameDish}>Caesar Salad</div>
    </Link>
    <div className={r.extra}>
      <div className={r.stars}>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star-half"></i>
      </div>
      <div className={r.bookmarkDiv}>
        <button className={r.bookmark}><i className="fa-regular fa-bookmark"></i></button>
      </div>
    </div>
  </div>
</div>


<div className={r.soups}>
  <div className={`${r.SpinachnWhite} ${r.soup}`}>
    <Link to="/recipie/SpinachWhiteBeanSoup">
      <img src={soupcover2} className={r.imgDish} alt="Spinach and White Bean Soup" />
      <div className={r.nameDish}>Spinach and White Bean Soup</div>
    </Link>
    <div className={r.extra}>
      <div className={r.stars}>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star-half"></i>
      </div>
      <div className={r.bookmarkDiv}>
        <button className={r.bookmark}><i className="fa-regular fa-bookmark"></i></button>
      </div>
    </div>
  </div>
</div>

<div className={r.soups}>
  <div className={`${r.ThaiSoup} ${r.soup}`}>
    <Link to="/recipie/ThaiCoconutCurrySoup">
      <img src={soupcover1} className={r.imgDish} alt="Thai Coconut Curry Soup" />
      <div className={r.nameDish}>Thai Coconut Curry Soup</div>
    </Link>
    <div className={r.extra}>
      <div className={r.stars}>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
      </div>
      <div className={r.bookmarkDiv}>
        <button className={r.bookmark}><i className="fa-regular fa-bookmark"></i></button>
      </div>
    </div>
  </div>
</div>


<div className={r.soups}>
  <div className={`${r.Lentil} ${r.soup}`}>
    <Link to="/recipie/LentilSoup">
      <img src={soupcover2} className={r.imgDish} alt="Lentil Soup" />
      <div className={r.nameDish}>Lentil Soup</div>
    </Link>
    <div className={r.extra}>
      <div className={r.stars}>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star-half"></i>
      </div>
      <div className={r.bookmarkDiv}>
        <button className={r.bookmark}><i className="fa-regular fa-bookmark"></i></button>
      </div>
    </div>
  </div>
</div>


      </div>

      {/*vegetarian ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
      <h1 className={`${r.hi}`}>Vegetarian</h1>
      <div className={r.vegetarians}>

      <div className={r.vegetarianDishes}>
  <div className={`${r.MRisotto} ${r.vegetarian}`}>
    <Link to="/recipie/MushroomRisotto">
      <img src={risoto} className={r.imgDish} alt="Mushroom Risotto" />
      <div className={r.nameDish}>Mushroom Risotto</div>
    </Link>
    <div className={r.extra}>
      <div className={r.stars}>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
      </div>
      <div className={r.bookmarkDiv}>
        <button className={r.bookmark}><i className="fa-regular fa-bookmark"></i></button>
      </div>
    </div>
  </div>
</div>

<div className={r.vegetarianDishes}>
  <div className={`${r.Burger} ${r.vegetarian}`}>
    <Link to="/recipie/VeggieBurger">
      <img src={burger1} className={r.imgDish} alt="Veggie Burger" />
      <div className={r.nameDish}>Veggie Burger</div>
    </Link>
    <div className={r.extra}>
      <div className={r.stars}>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
      </div>
      <div className={r.bookmarkDiv}>
        <button className={r.bookmark}><i className="fa-regular fa-bookmark"></i></button>
      </div>
    </div>
  </div>
</div>


<div className={r.vegetarianDishes}>
  <div className={`${r.Alfredo} ${r.vegetarian}`}>
    <Link to="/recipie/AlfredoFutticini">
      <img src={pasta3} className={r.imgDish} alt="Alfredo Futticini" />
      <div className={r.nameDish}>Alfredo Futticini</div>
    </Link>
    <div className={r.extra}>
      <div className={r.stars}>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
      </div>
      <div className={r.bookmarkDiv}>
        <button className={r.bookmark}><i className="fa-regular fa-bookmark"></i></button>
      </div>
    </div>
  </div>
</div>

<div className={r.vegetarianDishes}>
  <div className={`${r.Falafel} ${r.vegetarian}`}>
    <Link to="/recipie/FalafelWrap">
      <img src={crep} className={r.imgDish} alt="Falafel Wrap" />
      <div className={r.nameDish}>Falafel Wrap</div>
    </Link>
    <div className={r.extra}>
      <div className={r.stars}>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star-half"></i>
      </div>
      <div className={r.bookmarkDiv}>
        <button className={r.bookmark}><i className="fa-regular fa-bookmark"></i></button>
      </div>
    </div>
  </div>
</div>

<div className={r.vegetarianDishes}>
  <div className={`${r.Sushi} ${r.vegetarian}`}>
    <Link to="/recipie/VegetarianSushiRolls">
      <img src={sushi} className={r.imgDish} alt="Vegetarian Sushi Rolls" />
      <div className={r.nameDish}>Vegetarian Sushi Rolls</div>
    </Link>
    <div className={r.extra}>
      <div className={r.stars}>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
      </div>
      <div className={r.bookmarkDiv}>
        <button className={r.bookmark}><i className="fa-regular fa-bookmark"></i></button>
      </div>
    </div>
  </div>
</div>

<div className={r.vegetarianDishes}>
  <div className={`${r.Pizza} ${r.vegetarian}`}>
    <Link to="/recipie/MargheritaPizza">
      <img src={pizza} className={r.imgDish} alt="Margherita Pizza" />
      <div className={r.nameDish}>Margherita Pizza</div>
    </Link>
    <div className={r.extra}>
      <div className={r.stars}>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
      </div>
      <div className={r.bookmarkDiv}>
        <button className={r.bookmark}><i className="fa-regular fa-bookmark"></i></button>
      </div>
    </div>
  </div>
</div>

      </div>


    {/* salads  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
    <h1 className={`${r.hi}`}>Salads</h1>
    <div className={r.salads}>

    <div className={r.vegetarianDishes}>
  <div className={`${r.Alfredo} ${r.vegetarian}`}>
    <Link to="/recipie/AlfredoFutticini">
      <img src={pasta3} className={r.imgDish} alt="Alfredo Futticini" />
      <div className={r.nameDish}>Alfredo Futticini</div>
    </Link>
    <div className={r.extra}>
      <div className={r.stars}>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
      </div>
      <div className={r.bookmarkDiv}>
        <button className={r.bookmark}><i className="fa-regular fa-bookmark"></i></button>
      </div>
    </div>
  </div>
</div>

<div className={r.vegetarianDishes}>
  <div className={`${r.Falafel} ${r.vegetarian}`}>
    <Link to="/recipie/FalafelWrap">
      <img src={crep} className={r.imgDish} alt="Falafel Wrap" />
      <div className={r.nameDish}>Falafel Wrap</div>
    </Link>
    <div className={r.extra}>
      <div className={r.stars}>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star-half"></i>
      </div>
      <div className={r.bookmarkDiv}>
        <button className={r.bookmark}><i className="fa-regular fa-bookmark"></i></button>
      </div>
    </div>
  </div>
</div>

<div className={r.vegetarianDishes}>
  <div className={`${r.Sushi} ${r.vegetarian}`}>
    <Link to="/recipie/VegetarianSushiRolls">
      <img src={sushi} className={r.imgDish} alt="Vegetarian Sushi Rolls" />
      <div className={r.nameDish}>Vegetarian Sushi Rolls</div>
    </Link>
    <div className={r.extra}>
      <div className={r.stars}>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
      </div>
      <div className={r.bookmarkDiv}>
        <button className={r.bookmark}><i className="fa-regular fa-bookmark"></i></button>
      </div>
    </div>
  </div>
</div>

<div className={r.vegetarianDishes}>
  <div className={`${r.Pizza} ${r.vegetarian}`}>
    <Link to="/recipie/MargheritaPizza">
      <img src={pizza} className={r.imgDish} alt="Margherita Pizza" />
      <div className={r.nameDish}>Margherita Pizza</div>
    </Link>
    <div className={r.extra}>
      <div className={r.stars}>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
        <i className="fa-solid fa-star"></i>
      </div>
      <div className={r.bookmarkDiv}>
        <button className={r.bookmark}><i className="fa-regular fa-bookmark"></i></button>
      </div>
    </div>
  </div>
</div>


    </div>
    </div>
    
  );
}

export default Recipes;