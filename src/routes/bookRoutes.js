const express = require("express");
const booksRouter = express.Router();
const Bookdata = require('../model/Bookdata');
function router(nav)
{
    // List of Books Page
    booksRouter.get("/",(req,res)=>{
        Bookdata.find()
        .then(function (books){
            res.render("books",
            {
                nav,
                title:"Library",
                books
            });
        })
    });
    // A Single Book Access
    booksRouter.get("/:id",(req,res)=>{
        const id = req.params.id;
        Bookdata.findOne({_id:id})
        .then(function (book){
            res.render("book",{
                nav,
                title:"Library",
                book
            });
        })
    });
    // Add New Book Form Page
    booksRouter.get('/add-books',(req,res)=>{
        res.render('addbooks',
        {
            nav,
            title:'Library'
        });
    });
    // Deleting A Existing Author From Database
    booksRouter.get("/del",(req,res)=>{
        Bookdata.find()
        .then(function (books){
            res.render("books",
            {
                nav,
                title:"Library",
                books
            });
        })
    });
    return booksRouter;
}
module.exports = router;