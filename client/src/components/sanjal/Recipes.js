import React from 'react';
import r from './Recipes.module.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBowlFood, faClock, faFire } from '@fortawesome/free-solid-svg-icons'; 
import { Link } from 'react-router-dom';
// import backgroundImg from './purple.jpeg';

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

// import Todo from './todo/Todo.js';

const backgroundStyle = {
  backgroundcolor: 'green'
};

function Recipes() {
  return (
    <div className={r.mainMenu} style={backgroundStyle}>
      

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


        <Link to="/recipie/Waffels">
          <div className={`${r.Waffels} ${r.sweet}`}>
            <img src={waffel} className={r.imgDish} alt="Waffels" />
            <div className={r.nameDish}>Waffels</div>
            <div className={r.stars}>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
          </div>
        </Link>

        <Link to="/recipie/Doughnuts">
          <div className={`${r.Doughnuts} ${r.sweet}`}>
            <img src={donut} className={r.imgDish} alt="Doughnuts" />
            <div className={r.nameDish}>Doughnuts</div>
            <div className={r.stars}>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div>
          </div>
        </Link>
      </div>

      {/* Pastas */}
      <h1 className={`${r.hi}`}>Pastas</h1>
      <div className={r.pastas}>
        <Link to="/recipie/Pastasss">
          <div className={`${r.Ravioli} ${r.pasta}`}>
            <img src={pasta} className={r.imgDish} alt="Ravioli" />
            <div className={r.nameDish}>Spinach-Corn Ravioli</div>
            <div className={r.stars}>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star-half"></i>
            </div>
          </div>
        </Link>

        <Link to="/recipie/Pastasss">
          <div className={`${r.Pesto} ${r.pasta}`}>
            <img src={pasta1} className={r.imgDish} alt="Pesto" />
            <div className={r.nameDish}>Pesto</div>
            <div className={r.stars}>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star-half"></i>
            </div>
          </div>
        </Link>

        <Link to="/recipie/Pastasss">
          <div className={`${r.Alfredo} ${r.pasta}`}>
            <img src={pasta2} className={r.imgDish} alt="Alfredo" />
            <div className={r.nameDish}>Alfredo Fettuccine</div>
            <div className={r.stars}>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star-half"></i>
            </div>
          </div>
        </Link>

        <Link to="/recipie/Pastasss">
          <div className={`${r.Arrabbiata} ${r.pasta}`}>
            <img src={pasta3} className={r.imgDish} alt="Arrabbiata" />
            <div className={r.nameDish}>Arrabbiata</div>
            <div className={r.stars}>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star-half"></i>
            </div>
          </div>
        </Link>

        <Link to="/recipie/Pastasss">
          <div className={`${r.AglioeOlio} ${r.pasta}`}>
            <img src={pasta} className={r.imgDish} alt="Aglio e Olio" />
            <div className={r.nameDish}>Aglio e Olio</div>
            <div className={r.stars}>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star-half"></i>
            </div>
          </div>
        </Link>

        <Link to="/recipie/Pastasss">
          <div className={`${r.Cheese} ${r.pasta}`}>
            <img src={pasta1} className={r.imgDish} alt="Four Cheese Sauce" />
            <div className={r.nameDish}>Four Cheese Sauce</div>
            <div className={r.stars}>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star-half"></i>
            </div>
          </div>
        </Link>
      </div>

      {/* soups  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      <h1 className={`${r.hi}`}>Soups</h1>
      <div className={r.soups}>
        <Link to="/recipie/TomatoSoup">
          <div className={`${r.Tomato} ${r.soup}`}>
            <img src={soupcover1} className={r.imgDish} alt="Tomato Soup"></img>
            <div className={r.nameDish}>Tomato Soup</div>
            <div className={r.stars}>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star-half"></i>
            </div> {/* 3.5 */}
          </div>
        </Link>

        <Link to="/recipie/SpinachWhiteBeanSoup">
          <div className={`${r.SpinachnWhite} ${r.soup}`}>
            <img src={soupcover2} className={r.imgDish} alt="Spinach and White Bean Soup"></img>
            <div className={r.nameDish}>Spinach and White Bean Soup</div>
            <div className={r.stars}>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star-half"></i>
            </div> {/* 4.5 */}
          </div>
        </Link>

        <Link to="/recipie/ThaiCoconutCurrySoup">
          <div className={`${r.ThaiSoup} ${r.soup}`}>
            <img src={soupcover1} className={r.imgDish} alt="Thai Coconut Curry Soup"></img>
            <div className={r.nameDish}>Thai Coconut Curry Soup</div>
            <div className={r.stars}>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div> {/* 4 */}
          </div>
        </Link>

        <Link to="/recipie/LentilSoup">
          <div className={`${r.Lentil} ${r.soup}`}>
            <img src={soupcover2} className={r.imgDish} alt="Lentil Soup"></img>
            <div className={r.nameDish}>Lentil Soup</div>
            <div className={r.stars}>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star-half"></i>
            </div> {/* 3.5 */}
          </div>
        </Link>
      </div>

      {/*vegetarian ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////*/}
      <h1 className={`${r.hi}`}>Vegetarian</h1>
      <div className={r.vegetarians}>
        <Link to="/recipie/MushroomRisotto">
          <div className={`${r.MRisotto} ${r.vegetarian}`}>
            <img src={risoto} className={r.imgDish} alt="Mushroom Risotto"></img>
            <div className={r.nameDish}>Mushroom Risotto</div>
            <div className={r.stars}>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div> {/* 4 */}
          </div>
        </Link>

        <Link to="/recipie/VeggieBurger">
          <div className={`${r.Burger} ${r.vegetarian}`}>
            <img src={burger1} className={r.imgDish} alt="Veggie Burger"></img>
            <div className={r.nameDish}>Veggie Burger</div>
            <div className={r.stars}>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div> {/* 4 */}
          </div>
        </Link>

        <Link to="/recipie/AlfredoFutticini">
          <div className={`${r.Alfredo} ${r.vegetarian}`}>
            <img src={pasta3} className={r.imgDish} alt="Alfredo Futticini"></img>
            <div className={r.nameDish}>Alfredo Futticini</div>
            <div className={r.stars}>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div> {/* 3 */}
          </div>
        </Link>

        <Link to="/recipie/FalafelWrap">
          <div className={`${r.Falafel} ${r.vegetarian}`}>
            <img src={crep} className={r.imgDish} alt="Falafel Wrap"></img>
            <div className={r.nameDish}>Falafel Wrap</div>
            <div className={r.stars}>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star-half"></i>
            </div> {/* 4.5 */}
          </div>
        </Link>

        <Link to="/recipie/VegetarianSushiRolls">
          <div className={`${r.Sushi} ${r.vegetarian}`}>
            <img src={sushi} className={r.imgDish} alt="Vegetarian Sushi Rolls"></img>
            <div className={r.nameDish}>Vegetarian Sushi Rolls</div>
            <div className={r.stars}>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div> {/* 4 */}
          </div>
        </Link>

        <Link to="/recipie/MargheritaPizza">
          <div className={`${r.Pizza} ${r.vegetarian}`}>
            <img src={pizza} className={r.imgDish} alt="Margherita Pizza"></img>
            <div className={r.nameDish}>Margherita Pizza</div>
            <div className={r.stars}>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
            </div> {/* 4 */}
          </div>
        </Link>
      </div>


    {/* salads  ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
    <h1 className={`${r.hi}`}>Salads</h1>
    <div className={r.salads}>
    <Link to="/Salads">
      <div className={`${r.CaesarS} ${r.salad}`}>
        <img src={salad} className={r.imgDish}></img>
     
        <div className={r.nameDish}>Caesar Salad</div>
        <div className={r.stars}><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star-half"></i> </div>  {/*4.5*/}
      </div>
      </Link>

      <Link to="/Salads">
      <div className={`${r.GreekS} ${r.salad}`}>
        <img src={salad} className={r.imgDish}></img>
        <div className={r.nameDish}>Greek Salad</div>
        <div className={r.stars}><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star-half"></i> </div>  {/*4.5*/}
      </div>
      </Link>

      <Link to="/Salads">
      <div className={`${r.SpinachS} ${r.salad}`}>
        <img src={salad} className={r.imgDish}></img>
        <div className={r.nameDish}>Spinach Salad</div>
        <div className={r.stars}><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star-half"></i> </div>  {/*4.5*/}
      </div>
      </Link>

      <Link to="/Salads">
      <div className={`${r.WaldorfS} ${r.salad}`}>
        <img src={salad} className={r.imgDish}></img>
        <div className={r.nameDish}>Waldorf Salad</div>
        <div className={r.stars}><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i><i class="fa-solid fa-star"></i>
        <i class="fa-solid fa-star-half"></i> </div>  {/*4.5*/}
      </div>
      </Link>
    </div>
    </div>
    
  );
}

export default Recipes;
