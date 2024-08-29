// src/404.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const styles = {
    container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        flexDirection: 'column',
        textAlign: 'center',
    },
    title:{
        fontSize: '2.3em',
        color: '#ff0000',
    },
    message: {
        fontSize: '1.2em',
        color: '#333',
    },
    link: {
        display: 'inline-block',
        marginTop: '20px',
        padding: '10px 20px',
        backgroundColor: '#007bff',
        color: '#fff',
        textDecoration: 'none',
        borderRadius: '5px',
    },
    linkHover: {
        backgroundColor: '#0056b3',
    },
};

const Error404 = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.title}>404 - Page Not Found</h1>
            <p style={styles.message}> Sorry, the page you are looking for doesn't exist</p>
            <Link to = "/" style = {styles.link}>Go to Home</Link>
        </div>
    )
}

export default Error404;