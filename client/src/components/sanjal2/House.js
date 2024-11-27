import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Create from './Create';
import o from './house.module.css'; 

function House() {
    const [todos, setTodos] = useState([]);
    
    useEffect(() => {
        axios.get('/Recipe/todo/get')
            .then(result => setTodos(result.data))
            .catch(err => console.log(err));
    }, []);

    const handleEdit = (id) => {
        axios.put(`/Recipe/todo/update/${id}`)
            .then(() => {
                setTodos(todos.map(todo => 
                    todo._id === id ? { ...todo, done: !todo.done } : todo
                ));
            })
            .catch(err => console.log(err));
    };

    const handleDelete = (id) => {
        axios.delete(`/Recipe/todo/delete/${id}`)
            .then(() => {
                setTodos(todos.filter(todo => todo._id !== id));
            })
            .catch(err => console.log(err));
    };

    return (
        <div>
  <Create refreshTodos={() => axios.get('/Recipe/todo/get').then(result => setTodos(result.data))} />
  {todos.length === 0
    ? <div><h3>No record</h3></div>
    : todos.map(todo => (
        <div className={`${o.allTask}`} key={todo._id}>  {/* Add 'key' prop here to avoid key warnings */}
          <div className={`${o.Task}`}>
            <button
              className={`${o.donebtn}`}
              onClick={() => handleEdit(todo._id)}
              style={{ backgroundColor: todo.done ? '#49b533' : 'red' }}
            >
              .
            </button>
            <p
              style={{
                textDecoration: todo.done ? 'line-through' : 'none',
                cursor: 'pointer', 
              }}
              onClick={() => handleEdit(todo._id)} 
            >
              {todo.todo}
            </p>

            <button onClick={() => handleDelete(todo._id)} className={`${o.delbtn}`}>
              -
            </button>
          </div>
        </div>
      ))
  }
</div>

    );
}

export default House;