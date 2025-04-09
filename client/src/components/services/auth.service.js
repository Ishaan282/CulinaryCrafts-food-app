const loginService = async (email, password) => {
    try {
        const response = await fetch('/api/auth/login', {  // Remove full URL since you're using proxy
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        
        // Store authentication status in localStorage
        localStorage.setItem('loggedin', 'true');
        localStorage.setItem('user', JSON.stringify(data.user));
        
        return data;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        throw error;
    }
};

const registerService = async (username, email, password) => {
    try {
        const response = await fetch('/api/auth/signup', {  // Remove full URL
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({username, email, password })
        });

        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('There was a problem with the fetch operation:', error);
        throw error;
    }
};

export { loginService, registerService };  // Use ES6 exports