const User = require('../models/Samiksha1_schema');
const bcrypt = require('bcrypt');
const login= async(req, res)=>{
    try {
        const { email, password } = req.body;
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ msg: "Incorrect email or password", status: false });
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if (!isPasswordValid) {
            return res.status(400).json({ msg: "Incorrect password", status: false });
        }
        const UserInfo = {username: user.username, email: user.email};
        return res.json({ status: true, user: UserInfo });
    } catch (error) {
        res.json({ message: "login failed" });
    }
};
const signUp= async(req, res)=>{
    try {
        const { username, email, password } = req.body;
        const usernameCheck = await User.findOne({ username });
        if (usernameCheck !== null) {
            return res.json({ msg: "Username already used", status: false });
        }

        const emailCheck = await User.findOne({ email });
        if (emailCheck  !== null) {
            return res.json({ msg: "Email already used", status: false });
        }
        const hashedPassword = await bcrypt.hash(password, 10);  // 2^ 10 1024 Corrected typo
        const user = await User.create({
            email,
            username,
            password: hashedPassword,
        });
        user.save();
        const UserInfo = {username: user.username, email: user.email};
        return res.json({ status: true, user: UserInfo });
    } catch (error) {
        res.json({ message: "sign up failed" });
    }
};
module.exports = {
    login,
    signUp
};