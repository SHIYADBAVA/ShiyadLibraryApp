// Accessing mongoose package
const mongoose = require("mongoose");
var objectId=require('mongodb').ObjectID

// Database Connection
mongoose.connect("mongodb+srv://userone:userone@cluster0.62jod.mongodb.net/LibraryApp?retryWrites=true&w=majority");

// Schema Definition
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    Name:{
        type: String
    },
    username:{
        type: String,
        unique:true
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