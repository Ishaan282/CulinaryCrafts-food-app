const User = require("../models/Samiksha1_schema");
const bcrypt = require("bcrypt");

module.exports.register = async (req, res, next) => {
    try {
        const { username, email, password } = req.body;

        //# Check if username is already used.
        const usernameCheck = await User.findOne({ username });
        if (usernameCheck) {
            // Changed: Added HTTP status code 409 (Conflict)
            return res.status(409).json({ msg: "Username already used", status: false });
        }

        //# Check if email is already used.
        const emailCheck = await User.findOne({ email });
        if (emailCheck) {
            // Changed: Added HTTP status code 409 (Conflict)
            return res.status(409).json({ msg: "Email already used", status: false });
        }

        //# Hash the password (10 rounds of salt).
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            email,
            username,
            password: hashedPassword,
        });

        // Changed: Instead of sending the entire user object, we create a clean user info object.
        const userInfo = { username: user.username, email: user.email };

        // Changed: Added HTTP status code 201 (Created)
        return res.status(201).json({ status: true, user: userInfo });
    } catch (ex) {
        // Changed: Log the error for server debugging
        console.error("Register error:", ex);
        next(ex);
    }
};

module.exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        
        // Search for the user by email.
        const user = await User.findOne({ email });

        if (!user) {
            // Changed: Use a generic message for both non-existent user and wrong password.
            // Changed: Added HTTP status code 400 (Bad Request)
            return res.status(400).json({ msg: "Incorrect email or password", status: false });
        }
        
        // Compare the provided password with the stored hashed password.
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            // Changed: Use consistent error messaging and status code.
            return res.status(400).json({ msg: "Incorrect email or password", status: false });
        }
        
        // Changed: Create a new user info object excluding sensitive data.
        const userInfo = { username: user.username, email: user.email };

        // Changed: Added HTTP status code 200 (OK)
        return res.status(200).json({ status: true, user: userInfo });
    } catch (ex) {
        console.error("Login error:", ex);
        next(ex);
    }
};
