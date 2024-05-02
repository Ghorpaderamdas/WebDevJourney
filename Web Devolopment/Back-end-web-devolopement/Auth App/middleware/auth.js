const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.auth = (req, res, next) => {
    try {
        // Extract JWT token from request
        const token = req.body.token || req.cookies.token || (req.headers.authorization && req.headers.authorization.replace("Bearer ", ""));

        if (!token) {
            return res.status(401).json({
                success: false,
                message: "Token missing"
            });
        }

        // Verify the token
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;

        next();
    } catch (err) {
        console.error(err);
        return res.status(401).json({
            success: false,
            message: "Invalid token"
        });
    }
};

exports.isStudent = (req, res, next) => {
    if (req.user.role !== "Student") {
        return res.status(401).json({
            success: false,
            message: "This is a protected route for students. You cannot access it."
        });
    }
    next();
};

exports.isAdmin = (req, res, next) => {
    if (req.user.role !== "Admin") {
        return res.status(401).json({
            success: false,
            message: "This is a protected route for admins. You cannot access it."
        });
    }
    next();
};
