const bcrypt = require('bcrypt');
const User = require("../Models/User");
const jwt = require("jsonwebtoken");

require("dotenv").config();

// Sign up route handler
exports.signup = async (req, res) => {
    try {
        const { name, email, password, role } = req.body;

        const existingUser = await User.findOne({ email });

        if (existingUser) {
            return res.status(400).json({
                success: false,
                message: "User already exists",
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const user = await User.create({ name, email, password: hashedPassword, role });

        return res.status(200).json({
            success: true,
            message: "User created successfully",
            data: user,
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            success: false,
            message: "Failed to register user, please try again later",
        });
    }
};

// Login route handler
exports.login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Please provide both email and password",
            });
        }

        const user = await User.findOne({ email });

        if (!user) {
            return res.status(401).json({
                success: false,
                message: "User does not exist",
            });
        }

        const passwordMatch = await bcrypt.compare(password, user.password);

        if (passwordMatch) {
            const payload = {
                email: user.email,
                id: user._id,
                role: user.role,
            };

            const token = jwt.sign(payload, process.env.JWT_SECRET, {
                expiresIn: "2h",
            });

            // Set token as a cookie
            res.cookie("token", token, {
                expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),
                httpOnly: true,
            });

            return res.status(200).json({
                success: true,
                token,
                user: {
                    _id: user._id,
                    name: user.name,
                    email: user.email,
                    role: user.role,
                },
                message: "User logged in successfully",
            });
        } else {
            return res.status(403).json({
                success: false,
                message: "Password incorrect",
            });
        }
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            success: false,
            message: "Login failed, please try again later",
        });
    }
};
