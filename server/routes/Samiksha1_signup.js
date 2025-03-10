const User = require("../models/Samiksha1_schema");
const bcrypt = require("bcrypt");  // Corrected typo

module.exports.register = async (req, res, next) => {
try {
    const { username, email, password } = req.body;

    const usernameCheck = await User.findOne({ username });
    if (usernameCheck) {
        return res.json({ msg: "Username already used", status: false });
    }

    const emailCheck = await User.findOne({ email });
    if (emailCheck) {
        return res.json({ msg: "Email already used", status: false });
    }

    const hashedPassword = await bcrypt.hash(password, 10);  // 2^ 10 1024 Corrected typo
    const user = await User.create({
        email,
        username,
        password: hashedPassword,
    });

    user.password = undefined;  // Avoids sending the password back in the response
    return res.json({ status: true, user });
} catch (ex) {
    next(ex);
}
};

module.exports.login = async (req, res, next) => {
    try {
        const { email, password } = req.body; // Change from username to email
        const user = await User.findOne({ email }); // Search by email instead
        
        if (!user) {
            return res.status(404).json({ msg: "Incorrect email or password", status: false });
        }
        
        const isPasswordValid = await bcrypt.compare(password, user.password);
        
        if (!isPasswordValid) {
            return res.status(400).json({ msg: "Incorrect password", status: false });
        }
        
        user.password = undefined; // Better way to remove password
        return res.json({ status: true, user });
    } catch (ex) {
        next(ex);
    }
};
