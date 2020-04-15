const mongoose = require('mongoose'); 

var User = mongoose.model("User",{
    name : {type : String},
    email: {type: String},
    address : {type: String},
    state : {type: String},
    number: {type: Number},
    password: {type: String}
},'user');

module.exports = User
