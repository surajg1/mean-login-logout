const express = require("express");
const router = express.Router();
const User  = require('../models/user');
const ObjectId = require('mongoose').Types.ObjectId;
const jwt = require("jsonwebtoken");

router.post("/",(req,res)=>{
    var usr = new User({
        name : req.body.name,
        email : req.body.email,
        address : req.body.address,
        state : req.body.state,
        number : req.body.number,
        password : req.body.password
    });

    usr.save().then(doc=>{
        res.send(doc);
    }).catch(err=>{
        res.status(500).send("Faild to Insert!", err);
    })
})

router.post("/login",(req, res)=> {

    User.findOne({email: req.body.email}).then(user => {
        if(!user){
            // console.log(user);
            return res.status(401).json({
                message : "authentication falid"
            });
        }
        fatechdUser = user;
        if(user.password == req.body.password){
            return user.password;
        };
    }).then(result =>{
        if(!result){
            return res.status(401).json({
                message : "authentication falid"
            });
        }

        console.log(fatechdUser);

        const token = jwt.sign({email: fatechdUser.email, userId: fatechdUser._id},
                "secret_this_should_be_longer", 
            {expiresIn: '1h'}
            );
            res.status(200).json({
                token: token,
                expiresIn: 3600,
                userId: fatechdUser._id
            });    
            
        }).catch(err => {
            console.log(err);
            return res.status(401).json({
            message : "Invalid Login details provided"
        });
    })
})

module.exports = router;