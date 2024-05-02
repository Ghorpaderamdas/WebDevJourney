const express = require('express');
const app = express();
const mongoose = require('mongoose');

require("dotenv").config();
const PORT = process.env.PORT || 4000;

app.use(express.json());

const blog = require('./routes/blog');

app.use("/api/v1", blog);

const dbConnect = require('./config/database');
dbConnect();

app.get('/', (req, res) => {
    res.send(`<h1>HomePage</h1>`);
});

app.listen(PORT, () => {
    console.log("App is Running at the", PORT);
});
