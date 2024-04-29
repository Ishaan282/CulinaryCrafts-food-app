import React, { useState } from 'react';
import './Recipes.css'
import fruitcakepic from './fruitcakepic.jpg';

function Fruitcake() {
    const [todos, setTodos] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleAddTodo = () => {
        if (inputValue.trim() !== '') {
            setTodos([...todos, inputValue]);
            setInputValue('');
        }
    };
    const handleDeleteTodo = (index) => {
        const updatedTodos = [...todos];
        updatedTodos.splice(index, 1);
        setTodos(updatedTodos);
    }

    return (
        <div className='bg-image-container'>
            <div className='appp'>
                <h1 className='fruitcake'>
                    FRUIT CAKE
                </h1>
                <div className='recipie-cake-ing'>
                    <div>
                        <h4>
                            Here's the List of Ingredients You Would Need
                        </h4>
                        <ul>
                            <li>Dried Fruits: Raisins, dates, tutti fruitti, candied mixed peel, orange zest, prunes are used.</li>
                            <li>Whole Wheat Flour</li>
                            <li>Leavening Agent: Baking powder and baking soda.</li>
                            <li>Curd & Milk</li>
                            <li>Sugar: Refined sugar.</li>
                            <li>Spices: Ground spices like cinnamon, cloves, cardamom, ginger, or pumpkin pie spice mix.</li>
                            <li>Oil: Refined oil or Melted butter.</li>
                            <li>Vanilla Extract</li>
                            <li>Optional: Grated orange zest, lemon zest, chopped nuts can be used.</li>
                        </ul>
                    </div>
                    <h4 className='How-to-recipie'>How to Make Eggless Fruit Cake</h4>
                    <div className='recipie-cake'>
                        To make a traditional plum cake, soak dried fruits in alcohol like rum or brandy for at least a day for better flavor absorption. Preheat the oven to 180 degrees C and line a round cake pan with parchment paper. Add dark caramel to the cake, stirring it until golden and smooth. Mix dry ingredients like flour, salt, mixed spice powders, baking powder, and baking soda. Mix the dry ingredients with the fruit cake batter. Transfer the batter to a round cake pan and bake in a preheated oven for 1 hour and 20 minutes. If the toothpick comes out clean, the cake is baked. Once baked, let it cool in the mold for 15 minutes before inverting it to a serving plate.
                    </div>
                </div>
                <div className='todo-ing'>
                    <div>
                        <h3>Shopping List</h3>
                        <input
                            type="text"
                            value={inputValue}
                            onChange={handleInputChange}
                            placeholder="Enter your Item"
                            className='enter-todo-ing'
                        />
                        <button onClick={handleAddTodo} className='add-icon-todo'>+</button>
                        <ul>
                            {todos.map((todo, index) => (
                                <li key={index}>
                                    {todo}
                                    <button className='add-icon-todo' onClick={() => handleDeleteTodo(index)}>-</button>
                                </li>
                            ))}
                            <li>Dried Fruits</li>
                            <li>Refined sugar</li>
                            <li>Milk</li>
                            <li>Flour</li>
                            <li>Baking powder</li>
                        </ul>
                    </div>
                    <button className='button-shopping'>Shop items</button>
                </div>
            </div>
        </div>
    );
}

export default Fruitcake;