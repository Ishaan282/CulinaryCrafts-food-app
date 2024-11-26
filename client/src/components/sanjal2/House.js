import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Create from './Create';
import y from './list.module.css'; 

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
                    <div className='task' key={todo._id}>
                        <button className={`${y.donebtn}`}  onClick={() => handleEdit(todo._id)} style={{ backgroundColor: todo.done ? 'green' : 'red' }} >
                            {/* {todo.done ? '.' : '.'} */}.
                        </button> 
                        <p>lol</p>  // lol
                        <p style={{ textDecoration: todo.done ? 'line_through' : 'none' }} >{todo.task}</p>
                        <button onClick={() => handleDelete(todo._id)} className={`${y.delbtn}`}>-</button>
                    </div>
                ))
            }
        </div>
    );
}

export default House;