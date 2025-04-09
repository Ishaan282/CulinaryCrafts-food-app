const User = require('../models/Samiksha1_schema');
const bcrypt = require('bcrypt');

// Login
const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ msg: "Incorrect email or password", status: false });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(400).json({ msg: "Incorrect email or password", status: false });
        }

        const UserInfo = { username: user.username, email: user.email };
        return res.status(200).json({ status: true, user: UserInfo });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Login failed", error: error.message });
    }
};

// Signup
const signUp = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        const usernameCheck = await User.findOne({ username });
        if (usernameCheck) {
            return res.status(409).json({ msg: "Username already used", status: false });
        }

        const emailCheck = await User.findOne({ email });
        if (emailCheck) {
            return res.status(409).json({ msg: "Email already used", status: false });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const user = await User.create({
            email,
            username,
            password: hashedPassword,
        });

        const UserInfo = { username: user.username, email: user.email };
        return res.status(201).json({ status: true, user: UserInfo });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Sign up failed", error: error.message });
    }
};

module.exports = { login, signUp };
