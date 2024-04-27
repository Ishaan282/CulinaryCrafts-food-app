// Home.js
import React from 'react';
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

const Home = () => {
  return (
    <>
    <div className={a.homeContainer}>
      <div className={a.leftSection}>
        <div className={a.curvedText}>
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
        <div className={a.circle}>
          <img src={quick} alt="quick and easy" />
          <p className={a.caption}>Quick and Easy</p>
        </div>
        <div className={a.circle}>
          <img src={vege} alt="vegetarian" />
          <p className={a.caption}>Vegetarian</p>
        </div>
        <div className={a.circle}>
          <img src={sweet} alt="desserts" />
          <p className={a.caption}>Desserts</p>
        </div>
        <div className={a.circle}>
          <img src={soup} alt="soups" />
          <p className={a.caption}>Soups</p>
        </div>
        <div className={a.circle}>
          <img src={salad} alt="salads" />
          <p className={a.caption}>Salads</p>
        </div>
        <div className={a.circle}>
          <img src={pasta} alt="pastas" />
          <p className={a.caption}>Pastas</p>
        </div>
      </div>
    </div>

    
    </>
  );
};

export default Home;
