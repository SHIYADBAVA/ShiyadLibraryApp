// Accessing mongoose package
const mongoose = require("mongoose");

// Database Connection
mongoose.connect("mongodb+srv://userone:userone@cluster0.62jod.mongodb.net/LibraryApp?retryWrites=true&w=majority");

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