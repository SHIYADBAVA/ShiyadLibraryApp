// Accessing mongoose package
const mongoose = require("mongoose");
var objectId=require('mongodb').ObjectID

// Database Connection
mongoose.connect("mongodb://localhost:27017/librarydb");

// Schema Definition
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    firstname:{
        type: String
    },
    lastname:{
        type: String
    },
    email:{
        type: String
    },
    phone:{
        type: Number
    },
    password:{
        type: String
    },
    password2:{
        type: String
    }
}, {timestamps: true})

// Model Creation
var Userdata = mongoose.model("userdata",UserSchema);
module.exports = Userdata;