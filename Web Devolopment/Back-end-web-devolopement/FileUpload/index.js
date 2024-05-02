//app create
const express =  require('express');
const app = express();

require("dotenv").config();
// port find out
const PORT = process.env.PORT || 3000;

//midleware
app.use(express.json());
const fileupload = require("express-fileupload");
app.use(fileupload({
    useTempFiles : true,
    tempFileDir:'/tmp/'
}));

//db connect

const db = require("./config/database");
db.connect();

//cloud connect
const cloudinary = require("./config/cloudinary");
cloudinary.cloudinaryConnect();


// route import and mount 
const Upload = require("./routes/FileUpload");
app.use("/api/v1/upload",Upload);

// Activate 
app.listen(PORT,() => {
    console.log("Server fileuplade Run at ",PORT);
})
