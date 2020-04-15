const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/task")
    .then(()=>{
        console.log("Connected to database");
    }).catch(err=>{
        console.log("Faild to connenect");
    })

module.exports = mongoose