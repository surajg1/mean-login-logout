const express = require('express');
const bodyParser = require('body-parser');
const { mongoose } = require('./dbConnection');

var app = express();

var userController = require("./controller/User");

app.use(bodyParser.json()); 


app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*");
    res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, PATCH, PUT, DELETE, OPTIONS"
        );
    next();
}); 

app.listen(3000, ()=>{
    console.log("App is running on port 3000");

});

app.use("/user", userController);


