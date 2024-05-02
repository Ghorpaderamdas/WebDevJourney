// step1 - create folder
// step2 - move into that folder
// step3 - npm init -y
// step4 - open folder using vscode
// step5 - npm i express
// step6 - create server.js

//Server Instantiate
const express = require("express");
const app = express();


//activate the server on port 9000
app.listen(9000, () => {
    console.log("Server Establish at 9000 Port");
  });

  //used to parse req.body in express ->PUT or POST
  const bodyParser =require('body-parser');

  //specifically parse JSON data & add it to the req.body object
  app.use(bodyParser.json());

 //Routes
  app.get('/', (req, res) => {
    res.send("Sender");
  });

  app.post('/api/cars', (req, res) => {
    const { name, brand } = req.body;
    console.log(name);
    console.log(brand);
    res.send("Car Submitted Successfully.");
 });


 const mongoose = require('mongoose');

 mongoose.connect('mongodb://localhost:27017/myDatabase', {
       useNewUrlParser:true,
       useUnifiedTopology:true
 })
 .then(() => {console.log("Connection Successful")})
 .catch((error) => {console.log("Recieved an error")});