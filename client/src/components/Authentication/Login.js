// // LoginPage.js
// import React, { useState } from 'react';
// // import React from 'react';
// import { Link } from 'react-router-dom';
// import a from './Login.module.css'; 
// import loginImage from './Assets/loginimg.jpg'; 
// import { useNavigate } from 'react-router-dom';
// import { loginService } from '../services/auth.service';

// const Login = () => {
//     const navigate = useNavigate();
//     const [input ,setInput]=useState({
//         email:"",
//         password:"",
//     });

//     const handleLogin = (e) => {
//         e.preventDefault();
//         try{
//             loginService(input.email, input.password)
//             .then((data) => {
//                 if(data.status){
//                   console.log("Login Successful");
//                   navigate("/Home", { state: { user: data.user } });
//                 }
//                 else{
//                     alert("Incorrect email or password");
//                 }
//             });
//         }
//         catch(error){
//             console.error('There was a problem with the fetch operation:', error);
//             throw error;
//         }
//       };

//   return (
//     <div className={a.authContainer}>
//       <div className={a.authImage}>
//         <img src={loginImage} alt="Login" className={a.image} />
//       </div>
//       <div className={a.authForm}>
//         <h2 className={a.authTitle}>Login</h2>
//         <form onSubmit={handleLogin}>
//           <input name="email" value={input.email} onChange={(e) => setInput({...input,[e.target.name] : e.target.value, })} type="email" placeholder="Email"  className={a.inputField} />
//           <input name="password" value={input.password} onChange={(e) => setInput({...input,[e.target.name] : e.target.value, })} type="password" placeholder="Password"className={a.inputField} />
//           <button type="submit" className={a.submitButton}>Login</button>
//         </form>
//         <p className={a.switchAuth}>New here? <Link to="/signup" className={a.switchLink}>Sign up now</Link></p>
//       </div>
//     </div>
//   );
// };

// export default Login;


import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { loginService } from '../services/auth.service';
import styles from './Login.module.css'; 
import loginImage from './Assets/loginimg.jpg';

const Login = () => {
    const [input, setInput] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        setError(null);
        
        if (!input.email || !input.password) {
            setError("Please fill in all fields");
            return;
        }

        setIsLoading(true);
        
        try {
            const data = await loginService(input.email, input.password);
            
            if (data.status) {
                login(data.user);
                navigate("/Home", { state: { user: data.user } });
            } else {
                setError(data.msg || "Incorrect email or password");
            }
        } catch (err) {
            console.error('Login error:', err);
            setError("Login failed. Please try again.");
        } finally {
            setIsLoading(false);
        }
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setInput(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className={styles.authContainer}>
            <div className={styles.authImage}>
                <img src={loginImage} alt="Login" className={styles.image} />
            </div>
            <div className={styles.authForm}>
                <h2 className={styles.authTitle}>Login</h2>
                
                {error && (
                    <div className={styles.inputField} style={{ 
                        color: '#ff3333',
                        backgroundColor: '#ffebeb',
                        padding: '10px',
                        marginBottom: '15px',
                        textAlign: 'center',
                        borderRadius: '4px'
                    }}>
                        {error}
                    </div>
                )}
                
                <form onSubmit={handleLogin}>
                    <input 
                        name="email" 
                        value={input.email} 
                        onChange={handleInputChange} 
                        type="email" 
                        placeholder="Email"  
                        className={styles.inputField}
                    />
                    <input 
                        name="password" 
                        value={input.password} 
                        onChange={handleInputChange} 
                        type="password" 
                        placeholder="Password"
                        className={styles.inputField}
                    />
                    <button 
                        type="submit" 
                        className={styles.submitButton}
                        disabled={isLoading}
                    >
                        {isLoading ? 'Logging in...' : 'Login'}
                    </button>
                </form>
                <p className={styles.switchAuth}>
                    New here? <Link to="/signup" className={styles.switchLink}>Sign up now</Link>
                </p>
            </div>
        </div>
    );
};

export default Login;