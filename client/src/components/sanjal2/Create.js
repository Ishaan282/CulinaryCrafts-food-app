import React, { useState } from 'react';
import axios from 'axios';
import u from './create.module.css';

function Create({ refreshTodos }) {
    const [task, setTask] = useState('');

    const handleAdd = () => {
        if (task.trim()) {
            axios.post('/Recipe/todo/add', { task }) // adding a task to the list
                .then(() => {
                    setTask(''); 
                    refreshTodos(); // Refresh the list
                })
                .catch(err => console.log(err));
        }
    };
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {   // enter key se add karta hai
            handleAdd();  
        }
      };

    return (
        <div>
            <input 
                type="text" 
                placeholder='Enter' 
                value={task} 
                onChange={(e) => setTask(e.target.value)} 
                className={`${u.addtext}`}
                onKeyDown={handleKeyDown}
            />
            <button className={`${u.addbtn}`} onClick={handleAdd}>Add</button>
        </div>
    );
}

export default Create;