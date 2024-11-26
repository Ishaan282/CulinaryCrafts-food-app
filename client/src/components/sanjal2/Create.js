import React, { useState } from 'react';
import axios from 'axios';
import y from './list.module.css'; 

function Create({ refreshTodos }) {
    const [task, setTask] = useState('');

    const handleAdd = () => {
        if (task.trim()) {
            axios.post('http://localhost:5000/add', { task })
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
                className={`${y.addtext}`}
            />
            <button className={`${y.addbtn}`} onClick={handleAdd}>Add</button>
        </div>
    );
}

export default Create;



// import React, { useState } from 'react';
// import axios from 'axios';
// import tt from './create.modules.css';
// import y from './list.module.css'; 

// function Create({ refreshTodos }) {
//     const [task, setTask] = useState('');

//     const handleAdd = () => {
//         if (task.trim()) {
//             axios.post('http://localhost:5000/add', { task })
//                 .then(() => {
//                     setTask(''); 
//                     refreshTodos(); 
//                 })
//                 .catch(err => console.log(err));
//         }
//     };
    
//     return (
//         <div>
//             <input 
//                 type="text" 
//                 placeholder='Enter' 
//                 value={task} 
//                 onChange={(e) => setTask(e.target.value)} 
//                 className={`${tt.addtext}`}
//             />
//             <button className={`${tt.addbtn}`} onClick={handleAdd}>Add</button>
//         </div>
//     );
// }

// export default Create;
