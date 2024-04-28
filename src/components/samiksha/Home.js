// Home.js
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import a from './Home.module.css'; 
import chef from './chef1.png';
import ingredient from './ingredients.jpg';
import picture from './picpicpic.jpg';
import reci from './recipes-book.jpg';
import ReactCurvedText from 'react-curved-text';
import pasta from './pastas.jpg';
import quick from './quick and easy.jpg';
import salad from'./salads.jpg';
import soup from './soups.jpg';
import sweet from './desserts.jpg';
import vege from './vegetarian.jpg';
import pancake from './pancakes11.jpg';
import salads from './salads.jpg';
import snack1 from './snack1.jpg';
import snack2 from './snack2.jpg';
import snack3 from './snack3.jpg';
import snack4 from './snack4.jpg';
import snack5 from './snack5.jpg';
import dish1 from './dish1.jpg';
import dish2 from './dish2.jpg';
import main from './mainmain.jpg';
import { useNavigate } from 'react-router-dom';

const Home = () => {
 

  return (
    <>
    <div className={a.homeContainer}>
      <div className={a.leftSection}>
        <div className={a.curvedText}>
          {/* "npm install react-curved-text"  for this to work*/}
      <ReactCurvedText
            width={300}
            height={120}
            cx={150}
            cy={150}
            rx={120}
            ry={60}
            startOffset={50}
            reversed={true}
            text="YOUR VERY OWN"
            textProps={{ style: { fontSize: 24 } }}
            textPathProps={null}
            tspanProps={null}
            ellipseProps={null}
            svgProps={null}
        />
      </div>
        <div className={a.mainText}>
          <h1>Recipe</h1>
          
          <h1>Destination</h1>
          <p className={a.subText}>Be Your Own Masterchef</p>
          <div className={a.buttons}>
            <Link to="/recipes" className={a.recipeBtn}>Recipe</Link>
            <Link to="/cart" className={a.cartBtn}>Cart</Link>
          </div>
        </div>
      </div>
      <div className={a.rightSection}>
        <img src={chef} alt="Chef" className={a.chefImage} />
      </div>
    </div>


    <div className={a.buttonContainer}>
      <button className={a.customButton}>
        <div className={a.leftContent}>
          <img src={reci} alt="Circle" className={a.circleImage} />
        </div>
        <div className={a.rightContent}>
          <h2>Browse Recipes</h2>
          <p>rwewsy ytwtsg sygag sgfd ffvs gwrfsb agsdab.</p>
        </div>
      </button>
      <button className={a.customButton}>
      <div className={a.leftContent}>
          <img src={ingredient} alt="Circle" className={a.circleImage} />
        </div>
        <div className={a.rightContent}>
          <h2>Buy Ingredients</h2>
          <p>rwewsy ytwtsg sygag sgfd ffvs gwrfsb agsdab.</p>
        </div>
      </button>
      <button className={a.customButton}>
      <div className={a.leftContent}>
          <img src={picture} alt="Circle" className={a.circleImage} />
        </div>
        <div className={a.rightContent}>
          <h2>Post Your Work</h2>
          <p>rwewsy ytwtsg sygag sgfd ffvs gwrfsb agsdab.</p>
        </div>
      </button>
    </div>
    <div className={a.categoriesSection}>
      <h2 className={a.categoryTitle}>BROWSE BY CATEGORY</h2>
      <div className={a.circleContainer}>
      <Link to="/recipes" className={a.link}>
        <div className={a.circle}>
          <img src={quick} alt="quick and easy" />
          <p className={a.caption}>Quick and Easy</p>
        </div>
      </Link>

      <Link to="/recipes" className={a.link}>
        <div className={a.circle}>
          <img src={vege} alt="vegetarian" />
          <p className={a.caption}>Vegetarian</p>
        </div>
        </Link>
        <Link to="/recipes" className={a.link}>
        <div className={a.circle}>
          <img src={sweet} alt="desserts" />
          <p className={a.caption}>Desserts</p>
        </div>
        </Link>
        <Link to="/recipes" className={a.link}>
        <div className={a.circle}>
          <img src={soup} alt="soups" />
          <p className={a.caption}>Soups</p>
        </div>
        </Link>

        <Link to="/recipes" className={a.link}>
        <div className={a.circle}>
          <img src={salad} alt="salads" />
          <p className={a.caption}>Salads</p>
        </div>
        </Link>
        <Link to="/recipes" className={a.link}>
        <div className={a.circle}>
          <img src={pasta} alt="pastas" />
          <p className={a.caption}>Pastas</p>
        </div>
        </Link>
      </div>
    </div>
    <div className={a.latestRecipesSection}>
      <h2 className={a.heading}>Latest Recipes</h2>
      <div className={a.recipeContainer}>
      
        <div className={a.recipeBox}>
        <Link to="/recipes" className={a.link}>
          <img src={pasta} alt="Recipe 1" className={a.recipeImage} />
          <p className={a.dessert}>Pastas</p>
          <p className={a.name}>Lemon Pasta</p>
          <div className={a.rating}>
            <span className={a.star}></span>
            <span className={a.star}></span>
            <span className={a.star}></span>
            <span className={a.star}></span>
            <span className={a.starEmpty}></span>
            <span className={a.ratingNumber}>54</span>
          </div>
          </Link>
        </div>
        <div className={a.recipeBox}>
        <Link to="/recipes" className={a.link}>
          <img src={pancake} alt="Recipe 2" className={a.recipeImage} />
          <p className={a.dessert}>Dessert</p>
          <p className={a.name}>Blueberry Pancakes</p>
          <div className={a.rating}>
            <span className={a.star}></span>
            <span className={a.star}></span>
            <span className={a.star}></span>
            <span className={a.star}></span>
            <span className={a.star}></span>
            <span className={a.ratingNumber}>32</span>
          </div>
          </Link>
        </div>

        <div className={a.recipeBox}>
        <Link to="/recipes" className={a.link}>
          <img src={salads} alt="Recipe 2" className={a.recipeImage} />
          <p className={a.dessert}>Salads</p>
          <p className={a.name}>Mixed Pasta</p>
          <div className={a.rating}>
            <span className={a.star}></span>
            <span className={a.star}></span>
            <span className={a.star}></span>
            <span className={a.starEmpty}></span>
            <span className={a.starEmpty}></span>
            <span className={a.ratingNumber}>21</span>
          </div>
          </Link>
        </div>


        <div className={a.recipeBox}>
        <Link to="/recipes" className={a.link}>
          <img src={sweet} alt="Recipe 3" className={a.recipeImage} />
          <p className={a.dessert}>Dessert</p>
          <p className={a.name}>Cosmic Brownies</p>
          <div className={a.rating}>
            <span className={a.star}></span>
            <span className={a.star}></span>
            <span className={a.star}></span>
            <span className={a.star}></span>
            <span className={a.starEmpty}></span>
            <span className={a.ratingNumber}>51</span>
          </div>
          </Link>
        </div>
      </div>
      <Link to="/recipes" className={a.link}>
      <button className={a.loadMoreBtn}>View More</button>
      </Link>
    </div>


    <div className={a.todayCookSection}>
  <h2 className={a.sectionTitle}>So, what will you cook today?</h2>

  <div className={a.cookContainer}>
    {/* First section */}
    
    <div className={a.section}>
    <Link to="/recipes" className={a.link}>
      <img src={dish1} alt="Most searched dish" />
      <p className={a.paracolored}>Recipes</p>
      <p className={a.paraidk}>Check out the most searched dish of today</p>
      </Link>
      <Link to="/recipes" className={a.link}>
      <img src={dish2} alt="New recipes" />
      <p className={a.paracolored}>Recipes</p>
      <p className={a.paraidk}>New recipes just for you</p>
      </Link>
    </div>
    {/* Second section */}
    
    <div className={a.section}>
    <Link to="/recipes" className={a.link}>
      <img src={main} alt="Egg salad" />
      <p>Veggie Salad</p>
      <div className={a.stars}>★★★★☆</div>
    </Link>
    </div>

    {/* Third section */}
    <div className={a.section}>
    <Link to="/recipes" className={a.link}>
      {[snack1, snack2, snack3, snack4, snack5].map((dish, index) => (
        <div key={index} className={a.smallDish}>
          <div className={a.text}>
            <p>Surprise Snack Type {index + 1}</p>
            <div className={a.stars}>★★★★★</div>
          </div>
          <img src={dish} alt={`Marmalade Type ${index + 1}`} />
        </div>
      ))}
      </Link>
    </div>
  </div>
</div>

    <div className={a.footer}>
      <div className={a.footerContainer}>
        <div className={a.footerSection}>
          <h3>Quick Links</h3>
          <Link to="/home">Home</Link>
          <Link to="/recipes">Recipes</Link>
          <Link to="/cart">Cart</Link>
          <Link to="/social">Social</Link>
        </div>
        <div className={a.footerSection}>
          <h3>Follow Us</h3>
          <Link to="http://instagram.com"><i className={`fa fa-instagram ${a.socialIcon}`}></i></Link>
          <Link to="http://facebook.com"><i className={`fa fa-facebook ${a.socialIcon}`}></i></Link>
          <Link to="http://twitter.com"><i className={`fa fa-twitter ${a.socialIcon}`}></i></Link>
          <Link to="http://pinterest.com"><i className={`fa fa-pinterest ${a.socialIcon}`}></i></Link>
        </div>
        <div className={a.footerSection}>
          <h3>Contact Us</h3>
          <p>email@example.com</p>
          <p>+123 456 7890</p>
        </div>
        <div className={a.footerSection}>
          <h3>Subscribe</h3>
          <input type="email" placeholder="Your Email" />
          <button type="submit">Subscribe</button>
        </div>
      </div>
      <div className={a.copyRight}>
        © 2024 Team-4 G22. All rights reserved.
      </div>
      
    </div>
   



    
    </>
  );
};

export default Home;
