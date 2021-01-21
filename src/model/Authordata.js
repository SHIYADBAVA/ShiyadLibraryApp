// Accessing mongoose package
const mongoose = require("mongoose");

// Database Connection
mongoose.connect("mongodb://localhost:27017/librarydb");

// Schema Definition
const Schema = mongoose.Schema;


const AuthorSchema = new Schema({
    author: String,
    book: String,
    details: String,
    image: String
})

// Model Creation
var Authordata = mongoose.model("authordata",AuthorSchema);
module.exports = Authordata;