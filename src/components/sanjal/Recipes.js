import React from 'react';
import r from './style.module.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBowlFood, faClock, faFire } from '@fortawesome/free-solid-svg-icons'; 
import { Link } from 'react-router-dom';
// import CheeseCake from './CheeseCake';


function App() {
  return (
    <div className={r.mainMenu}>


    {/* Sweets */}
    <h1>Deserts</h1>
    <div className={r.sweetFood}>
    
      {/* <div className={`${r.cheeseCake} ${r.sweet}`}  link={CheeseCake}> */}
      <Link to="/CheeseCake">
        <div>
        <img src="" className={r.imgDish}></img>
        <div className={r.nameDish}>Baked CheeseCake</div>
        <div className={r.stars}></div>
      </div> 
      </Link>

      <div className={`${r.Chocolate} ${r.sweet}`}>
        <img src="" className={r.imgDish}></img>
        <div className={r.nameDish}>Chocolate Cake</div>
        <div className={r.stars}></div>
      </div>

      <div className={`${r.Crembrule} ${r.sweet}`}>
        <img src="" className={r.imgDish}></img>
        <div className={r.nameDish}>Crembrule</div>
        <div className={r.stars}></div>
      </div>

      <div className={`${r.Bannana} ${r.sweet}`}>
        <img src="" className={r.imgDish}></img>
        <div className={r.nameDish}>Bannana Sunday</div>
        <div className={r.stars}></div>
      </div>

      <div className={`${r.Waffels} ${r.sweet}`}>
        <img src="" className={r.imgDish}></img>
        <div className={r.nameDish}>Waffels</div>
        <div className={r.stars}></div>
      </div>

      <div className={`${r.Doughnuts} ${r.sweet}`}>
        <img src="" className={r.imgDish}></img>
        <div className={r.nameDish}>Doughnuts</div>
        <div className={r.stars}></div>
      </div>
    </div>


    {/* Pastas */}
    <h1>Pastas</h1>
    <div className={r.pastas}>
      <div className={`${r.Ravioli} ${r.pasta}`}>
        <img src="" className={r.imgDish}></img>
        <div className={r.nameDish}>Spnich-Corn Ravioli</div>
        <div className={r.stars}></div>
      </div>

      <div className={`${r.Pesto} ${r.pasta}`}>
        <img src="" className={r.imgDish}></img>
        <div className={r.nameDish}>Pesto ssssss</div>
        <div className={r.stars}></div>
      </div>

      <div className={`${r.Alfredo} ${r.pasta}`}>
        <img src="" className={r.imgDish}></img>
        <div className={r.nameDish}>Alfredo Futticini</div>
        <div className={r.stars}></div>
      </div>

      <div className={`${r.Arbarita} ${r.pasta}`}>
        <img src="" className={r.imgDish}></img>
        <div className={r.nameDish}>Arbarita</div>
        <div className={r.stars}></div>
      </div>

      <div className={`${r.Waffels} ${r.pasta}`}>
        <img src="" className={r.imgDish}></img>
        <div className={r.nameDish}>Waffels</div>
        <div className={r.stars}></div>
      </div>

      <div className={`${r.Doughnuts} ${r.pasta}`}>
        <img src="" className={r.imgDish}></img>
        <div className={r.nameDish}>Doughnuts</div>
        <div className={r.stars}></div>
      </div>
    </div>

    {/* soups */}
    <h1>Pastas</h1>
    <div className={r.pastas}>
      <div className={`${r.Ravioli} ${r.pasta}`}>
        <img src="" className={r.imgDish}></img>
        <div className={r.nameDish}>Spnich-Corn Ravioli</div>
        <div className={r.stars}></div>
      </div>

      <div className={`${r.Pesto} ${r.pasta}`}>
        <img src="" className={r.imgDish}></img>
        <div className={r.nameDish}>Pesto ssssss</div>
        <div className={r.stars}></div>
      </div>

      <div className={`${r.Alfredo} ${r.pasta}`}>
        <img src="" className={r.imgDish}></img>
        <div className={r.nameDish}>Alfredo Futticini</div>
        <div className={r.stars}></div>
      </div>

      <div className={`${r.Arbarita} ${r.pasta}`}>
        <img src="" className={r.imgDish}></img>
        <div className={r.nameDish}>Arbarita</div>
        <div className={r.stars}></div>
      </div>

      <div className={`${r.Waffels} ${r.pasta}`}>
        <img src="" className={r.imgDish}></img>
        <div className={r.nameDish}>Waffels</div>
        <div className={r.stars}></div>
      </div>

      <div className={`${r.Doughnuts} ${r.pasta}`}>
        <img src="" className={r.imgDish}></img>
        <div className={r.nameDish}>Doughnuts</div>
        <div className={r.stars}></div>
      </div>
    </div>


    {/* vegetarian */}
    <h1>Pastas</h1>
    <div className={r.pastas}>
      <div className={`${r.Ravioli} ${r.pasta}`}>
        <img src="" className={r.imgDish}></img>
        <div className={r.nameDish}>Spnich-Corn Ravioli</div>
        <div className={r.stars}></div>
      </div>

      <div className={`${r.Pesto} ${r.pasta}`}>
        <img src="" className={r.imgDish}></img>
        <div className={r.nameDish}>Pesto ssssss</div>
        <div className={r.stars}></div>
      </div>

      <div className={`${r.Alfredo} ${r.pasta}`}>
        <img src="" className={r.imgDish}></img>
        <div className={r.nameDish}>Alfredo Futticini</div>
        <div className={r.stars}></div>
      </div>

      <div className={`${r.Arbarita} ${r.pasta}`}>
        <img src="" className={r.imgDish}></img>
        <div className={r.nameDish}>Arbarita</div>
        <div className={r.stars}></div>
      </div>

      <div className={`${r.Waffels} ${r.pasta}`}>
        <img src="" className={r.imgDish}></img>
        <div className={r.nameDish}>Waffels</div>
        <div className={r.stars}></div>
      </div>

      <div className={`${r.Doughnuts} ${r.pasta}`}>
        <img src="" className={r.imgDish}></img>
        <div className={r.nameDish}>Doughnuts</div>
        <div className={r.stars}></div>
      </div>
    </div>

    {/* salads */}
    <h1>Pastas</h1>
    <div className={r.pastas}>
      <div className={`${r.Ravioli} ${r.pasta}`}>
        <img src="" className={r.imgDish}></img>
        <div className={r.nameDish}>Spnich-Corn Ravioli</div>
        <div className={r.stars}></div>
      </div>

      <div className={`${r.Pesto} ${r.pasta}`}>
        <img src="" className={r.imgDish}></img>
        <div className={r.nameDish}>Pesto ssssss</div>
        <div className={r.stars}></div>
      </div>

      <div className={`${r.Alfredo} ${r.pasta}`}>
        <img src="" className={r.imgDish}></img>
        <div className={r.nameDish}>Alfredo Futticini</div>
        <div className={r.stars}></div>
      </div>

      <div className={`${r.Arbarita} ${r.pasta}`}>
        <img src="" className={r.imgDish}></img>
        <div className={r.nameDish}>Arbarita</div>
        <div className={r.stars}></div>
      </div>

    </div>


    


    </div>
  );
}

export default App;
