const express =  require('express');
const app = express();

require("dotenv").config();

const PORT = process.env.PORT || 4000;

// cookie-parser - what this and why we need this ?

const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.use(express.json());

require("./config/database").connect()

// route import and mount 
const user = require("./routes/user");
app.use("/api/v1",user);

// Activate 
app.listen(PORT,() => {
    console.log("Server Run at ",PORT);
})

app.get("/", (req,res) => {
   res.send("<h1>Auth App</h1>")
})
//DATABASE_URL = "mongodb+srv://rdghorpade2001:wsjG0TfJo4cZzpHm@cluster0.zwyqenv.mongodb.net/ghorpadeauthDatabase"