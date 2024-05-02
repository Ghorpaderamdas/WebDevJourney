const mongoose = require("mongoose");
require("dotenv").config();

const dbConnect = () => {
    const databaseURL = process.env.DATABASE_URL;

    if (!databaseURL) {
        console.error("Database URL is not provided in the environment variables.");
        process.exit(1);
    }

    mongoose.connect(databaseURL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("DB Connection is successful"))
    .catch((error) => {
        console.error("Issue in DB Connection:");
        console.error(error.message);
        process.exit(1);
    });
};

module.exports = dbConnect;
