const mongoose = require('mongoose');
require("dotenv").config();

exports.connect = async () => {
    try {
        await mongoose.connect(process.env.DATABASE_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database Connection established");
    } catch (error) {
        console.error("Connection Issues with Database:", error.message);
        process.exit(1);
    }
};
