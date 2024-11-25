import React from 'react';
import y from './list.module.css'; 
import axios from 'axios';
import House from './House'

function ShoppingList({ setOpenShoppingList }) {
    return (
        // <div className={`${y.entire}`}>
            <div className={`${y.main}`}>
                <div className={`${y.listHeader}`}>
                    <p className={`${y.header}`}>Shopping List</p>
                    <p className={`${y.header}`}><button className={ `${y.closeButton}`} onClick={() => setOpenShoppingList(false)}><i class="fa-regular fa-rectangle-xmark"></i></button></p> 
                </div>
                {/* TO_DO LIst  V*/}
                <div className={`${y.list}`}>
                    <div>
                        <House/>
                    </div>
                </div>
            {/* </div> */}
        </div>
    );
}

export default ShoppingList;



// import React, { useState, useEffect } from 'react';
// import axios from 'axios'; // Import Axios
// import y from './list.module.css';

// function ShoppingList({ setOpenShoppingList }) {
//   const [todos, setTodos] = useState([]);
//   const [newTodo, setNewTodo] = useState("");

//   // Fetch todos from the backend
//   useEffect(() => {
//     axios.get('http://localhost:5000/api/todos/get')  // Replace with your backend endpoint
//       .then(response => {
//         setTodos(response.data); // Set the todos to state
//       })
//       .catch(error => {
//         console.error("Error fetching todos:", error);
//       });
//   }, []); // Empty dependency array means it runs once when component mounts

//   // Handle adding a new todo
//   const addTodo = () => {
//     if (!newTodo.trim()) return; // Prevent empty todos

//     axios.post('http://localhost:5000/api/todos/add', { task: newTodo })
//       .then(response => {
//         setTodos([...todos, response.data]); // Update state with the new todo
//         setNewTodo(""); // Clear input
//       })
//       .catch(error => {
//         console.error("Error adding todo:", error);
//       });
//   };

//   // Handle deleting a todo
//   const deleteTodo = (id) => {
//     axios.delete(`http://localhost:5000/api/todos/delete/${id}`)
//       .then(() => {
//         setTodos(todos.filter(todo => todo._id !== id)); // Remove deleted todo from state
//       })
//       .catch(error => {
//         console.error("Error deleting todo:", error);
//       });
//   };

//   // Handle updating a todo
//   const toggleTodo = (id, currentCompleted) => {
//     axios.put(`http://localhost:5000/api/todos/update/${id}`, {
//       todo: currentCompleted ? "Completed" : "Pending",  // Example update
//       completed: !currentCompleted
//     })
//       .then(response => {
//         setTodos(todos.map(todo => 
//           todo._id === id ? response.data : todo
//         ));
//       })
//       .catch(error => {
//         console.error("Error updating todo:", error);
//       });
//   };


//   // front end 

//   return (
//     <div className={`${y.entire}`}>
//       <div className={`${y.main}`}>
//         <div className={`${y.listHeader}`}>
//           <p className={`${y.header}`}>Shopping List</p>
//           <p className={`${y.header}`}>
//             <button 
//               className={`${y.closeButton}`} 
//               onClick={() => setOpenShoppingList(false)}
//             >
//               <i className="fa-regular fa-rectangle-xmark"></i>
//             </button>
//           </p>
//         </div>
        
//         {/* List */}
//         <div className={`${y.list}`}>
//           <ul>
//             {todos.map(todo => (
//               <li key={todo._id}>
//                 {todo.todo}
//                 <button onClick={() => toggleTodo(todo._id, todo.completed)}>
//                   {todo.completed ? "Undo" : "Complete"}
//                 </button>
//                 <button onClick={() => deleteTodo(todo._id)}>Delete</button>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Add New Todo */}
//         <div>
//           <input 
//             type="text" 
//             value={newTodo} 
//             onChange={(e) => setNewTodo(e.target.value)} 
//             placeholder="Add a new task" 
//           />
//           <button onClick={addTodo}>Add</button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default ShoppingList;