import React, { useState } from 'react';
import axios from 'axios';

function Create({ refreshTodos }) {
    const [task, setTask] = useState('');

    const handleAdd = () => {
        if (task.trim()) {
            axios.post('http://localhost:3001/add', { task })
                .then(() => {
                    setTask(''); // Clear input
                    refreshTodos(); // Refresh todo list
                })
                .catch(err => console.log(err));
        }
    };

    return (
        <div>
            <input 
                type="text" 
                placeholder='Enter' 
                value={task} 
                onChange={(e) => setTask(e.target.value)} 
            />
            <button onClick={handleAdd}>Add</button>
        </div>
    );
}

export default Create;
