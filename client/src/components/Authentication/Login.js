import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from './context/AuthContext';
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