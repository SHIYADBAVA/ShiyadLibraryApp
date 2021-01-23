// Accessing mongoose package
const mongoose = require("mongoose");
var objectId=require('mongodb').ObjectID


// Database Connection
mongoose.connect("mongodb+srv://userone:userone@cluster0.62jod.mongodb.net/LibraryApp?retryWrites=true&w=majority");

// Schema Definition
const Schema = mongoose.Schema;


const BookSchema = new Schema({
    title: String,
    author: String,
    genre: String,
    description: String,
    image: String
})

// Model Creation
var Bookdata = mongoose.model("bookdata",BookSchema);
module.exports = Bookdata;