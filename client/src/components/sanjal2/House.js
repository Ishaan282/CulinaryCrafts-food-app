import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Create from './Create';
// import r from 'house.modules.css';

function House() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5000/get')
            .then(result => setTodos(result.data))
            .catch(err => console.log(err));
    }, []);

    const handleEdit = (id) => {
        axios.put(`http://localhost:5000/update/${id}`)
            .then(() => {
                setTodos(todos.map(todo => 
                    todo._id === id ? { ...todo, done: !todo.done } : todo
                ));
            })
            .catch(err => console.log(err));
    };

    const handleDelete = (id) => {
        axios.delete(`http://localhost:3001/delete/${id}`)
            .then(() => {
                setTodos(todos.filter(todo => todo._id !== id));
            })
            .catch(err => console.log(err));
    };

    return (
        <div>
            <Create refreshTodos={() => axios.get('http://localhost:3001/get').then(result => setTodos(result.data))} />
            {todos.length === 0
                ? <div><h3>No record</h3></div>
                : todos.map(todo => (
                    <div className='task' key={todo._id}>
                        <button 
                            onClick={() => handleEdit(todo._id)}
                            style={{ backgroundColor: todo.done ? 'green' : 'red' }}
                        >
                            {todo.done ? 'Undo' : 'Done'}
                        </button>
                        <p className={todo.done ? "line_through" : ""}>{todo.task}</p>
                        <button onClick={() => handleDelete(todo._id)}>Delete</button>
                    </div>
                ))
            }
        </div>
    );
}

export default House;
