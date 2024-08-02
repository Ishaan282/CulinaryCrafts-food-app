import React, { useState } from 'react';
import backgroundImage from './depictions/soup12.jpg';
import './cheesecake.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBowlFood, faClock, faFire } from '@fortawesome/free-solid-svg-icons';

const Soup = () => {
  const [ingredientsChecked, setIngredientsChecked] = useState({
    "1 1/2 cups graham cracker, crushed": false,
    "6 tablespoons butter, melted": false,
    "1/2 cup heavy cream": false,
    "1 cup cream cheese, at room temperature": false,
    "2/3 cup Condensed Milk": false,
    "1 teaspoon vanilla extract": false,
  });
  const [customIngredients, setCustomIngredients] = useState([]); // State for custom ingredients
  const [customIngredient, setCustomIngredient] = useState(''); // State for input value

  const handleCheckboxChange = (id) => {
    setIngredientsChecked({
      ...ingredientsChecked,
      [id]: !ingredientsChecked[id],
    });
  };

  const handleInputChange = (event) => {
    setCustomIngredient(event.target.value);
  };

  const handleAddIngredient = () => {
    if (customIngredient.trim() !== '') {
      setCustomIngredients([...customIngredients, { name: customIngredient.trim(), checked: false }]);
      setCustomIngredient('');
    }
  };

  const handleToggleCustomIngredient = (index) => {
    const updatedIngredients = [...customIngredients];
    updatedIngredients[index].checked = !updatedIngredients[index].checked;
    setCustomIngredients(updatedIngredients);
  };

  const handleRemoveIngredient = (index) => {
    const updatedIngredients = [...customIngredients];
    updatedIngredients.splice(index, 1);
    setCustomIngredients(updatedIngredients);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleAddIngredient();
    }
  };

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
  };
  const color = {
    // color : 'hotpink',
  };

  return (
    <div style={backgroundStyle}>
      <h1 className='recepie-name-sj' style={color}>Soup</h1>

      <div className='non-title'>
        <div className='ingredriants-todo-list '>
          <h2 className='title-ing-sj'>Ingredients</h2>
          <ul>
            {/* Render checked ingredients */}
            {Object.entries(ingredientsChecked).map(([id, isChecked]) => (
              <li key={id} className={isChecked ? 'checked' : ''}>
                <input
                  type="checkbox"
                  id={id}
                  checked={isChecked}
                  onChange={() => handleCheckboxChange(id)}
                />
                <label htmlFor={id}>{id}</label>
              </li>
            ))}
            {/* Render custom ingredients */}
            {customIngredients.map((ingredient, index) => (
              <li key={index}>
                <input
                  type="checkbox"
                  checked={ingredient.checked}
                  onChange={() => handleToggleCustomIngredient(index)}
                />
                <label>{ingredient.name}</label>
                <button onClick={() => handleRemoveIngredient(index)} className='button-plus'><i class="fa-solid fa-minus"></i></button>
              </li>
            ))}
          </ul>

          <div className='add-todo-ingr'>
            <input
              className='enter-new-ing'
              type="text"
              placeholder="Add custom Ingredients"
              value={customIngredient}
              onChange={handleInputChange}
              onKeyPress={handleKeyPress}
            />
            <button className='button-plus' onClick={handleAddIngredient}><i class="fa-solid fa-plus"></i></button>
          </div>
        </div>

        <div className='container-addi-info'>
          <div className='Servings addi-info'>
            <h6>Servings</h6>
            <FontAwesomeIcon icon={faBowlFood} />
            <p>6 People</p>
          </div>
          <div className='Time  addi-info'>
            <h6>Time</h6>
            <FontAwesomeIcon icon={faClock} />
            <p>1 Hour</p>
          </div>
          <div className='Calories addi-info'>
            <h6>Calories</h6>
            <p className='fire'><FontAwesomeIcon icon={faFire} /></p>
            <p>384 Kcl</p>
          </div>
        </div>

        <div className="cheesecake-recipe">
          <h2 className="recipe-section">Instructions:</h2>
          <ol className="instruction-list">
              <li>Select a pie pan whose inside top dimension is at least 9", and whose height is at least 1 1/4". Preheat the oven to 350°F.        </li>
              <li>To make the crust: Stir together all of the crust ingredients, mixing until thoroughly combined.</li>
              <li>Press the crumbs into the bottom and up the sides of the pie pan, making a thicker layer on the bottom than on the sides.</li>
              <li>To make the filling: Mix together the room-temperature cream cheese and sugar until smooth. Mix in the eggs and vanilla, again mixing until smooth. To avoid beating too much air into the batter, use a mixer set at low-medium speed. To avoid lumps, make sure the cream cheese is softened, and/or at room temperature.</li>
              <li>Set the pie pan onto a baking sheet, if desired; this makes it easier to transport in and out of the oven, and also protects the bottom of the crust from any potential scorching. Pour the filling into the crust.</li>
              <li>To bake the cheesecake: Place the cheesecake in the oven. Bake it for 20 minutes, then add a crust shield; or shield the crust with strips of aluminum foil. Bake for an additional 10 minutes (for a total of about 30 minutes). A digital thermometer inserted into the filling 1" from the edge should read between 165°F and 170°F; the filling won't look entirely set in the center.</li>
              <li>Remove the cheesecake from the oven and set it on a rack to cool. Once the cake is cool, refrigerate it, covered, until you're ready to serve it.</li>
              <li>Serve cheesecake in wedges, with fresh fruit if desired.</li>
              <li>Storage information: Store any leftover cheesecake in the refrigerator for several days; freeze for longer storage.</li>
            </ol>
        <br />

          <h3 className="recipe-section">Tips from our Bakers:</h3>
            <ul className="tips-list">
              <li>To make a raspberry swirl cheesecake: Spoon or pipe 1/4 cup (85g) seedless raspberry jam onto the top of the filling once it's in the crust, before baking. Gently (and briefly) swirl the jam into the filling with a butter knife or toothpick; you don't want to combine jam and filling completely, just create a pretty pattern. Be careful not to go too deep, as you don't want to risk scraping the bottom crust. Bake as directed.</li>
               <li>Want to serve the cheesecake with a tasty raspberry topping? Place the contents of a 12-ounce bag frozen raspberries (a scant 3 cups) in a bowl to thaw. You can hasten the process with a quick trip through the microwave, but don't let the berries cook. Add 1 tablespoon Instant ClearJel to thicken, and stir until well combined. Stir in 1 to 2 tablespoons granulated sugar, to taste. Add a pinch of ground cinnamon, if desired. Spoon the topping over the cheesecake.</li>
               <li>To make individual cheesecakes, divide the crust mixture and filling evenly among four 4" mini springform pans. Bake the cheesecakes for about 30 minutes, until the edges are set and a digital thermometer inserted into the center of one read 165°F to 170°F. Proceed with the recipe directions as written.</li>
              <li>Here's an easy way to reduce the carbs and calories in this recipe: substitute King Arthur Baking Sugar Alternative, cup for cup, for the sugar(s) called for. Be sure to substitute by volume (not weight); follow mixing directions as written. Use the designated oven temperature called for in the recipe. Since our Baking Sugar Alternative will bake and brown more quickly, start checking for doneness three-quarters of the way through the suggested bake time.</li>
           </ul>
        </div>
      </div>
    </div>
  );
}

export default Soup;
