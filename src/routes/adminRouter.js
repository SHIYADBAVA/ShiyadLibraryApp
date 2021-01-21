const express = require("express");
const adminRouter = express.Router();
const Bookdata = require("../model/Bookdata");
const Authordata = require("../model/Authordata");
var objectId=require('mongodb').ObjectID

function router(nav)
{
    // Admin Console For Books
    // Add New Book Form Page
    adminRouter.get('/add-books',(req,res)=>{
        res.render('addbooks',
        {
            nav,
            title:'Library'
        });
    });
    // Adding New Book to Database
    adminRouter.post('/add-books',(req,res)=>{
        var item = {
            title: req.body.title,
            author: req.body.author,
            description: req.body.description,
            genre: req.body.genre,
            image: req.body.image
        }
        var book = Bookdata(item);
        // let image = req.files.image;
        // image.mv('./public/image/'+id+".jpg",(error)=>{
        //     if(!error)
        //     {
        //         redirect('add-books');
        //     }
        //     else
        //     {
        //         console.log(error);
        //     }
        // })
        // Saving to Database
        book.save();
        res.redirect('add-books');
    });
    // Editing A Existing Book Form 
    adminRouter.get('/edit-book',(req,res)=>{
            res.render('edit-book',
            {
                nav,
                title:'Library'
            });
    });
    adminRouter.get('/edit-book/:id',(req,res)=>{
        const Bookid = req.params.id;
        // console.log(Bookdata.findOne({_id:objectId(Bookid)}));
        Bookdata.findOne({_id:objectId(Bookid)})
        .then((book)=>{
            res.render('edit-book',
            {
                nav,
                title:'Library',
                book
            }); 
        })
    });
        // Editing a Existing Book From Database
    adminRouter.post('/edit-book/:id',(req,res, next)=>{
        const Bookid = req.params.id;
        // const doc = Bookdata.findOne({_id:objectId(Bookid)});
        // console.log(doc);
        var item = {
            title: req.body.title,
            author: req.body.author,
            description: req.body.description,
            genre: req.body.genre,
            image: req.body.image
        }
        var book = Bookdata(item);
        // var book = Bookdata.findOne({_id:objectId(Bookid)});
        Bookdata.updateOne({_id:objectId(Bookid)},{$set:{
            title: req.body.title,
            author: req.body.author,
            description: req.body.description,
            genre: req.body.genre,
            image: req.body.image
        }})
        .then(function (book){
            res.render('bookedit',{
                nav,
                title:"Library",
                book
            });
        })
        
    });
    // Deleting an Existing Book from Database
    adminRouter.get('/del/:id',(req,res)=>{
        var Bookid = req.params.id;
        console.log(objectId(Bookid));
        Bookdata.deleteOne({_id:objectId(Bookid)}, function (err, result) {

            if (err) {
    
                console.log("error query");
    
            } else {
                console.log(result);
    
            }
        })
        .then(function (books){
            res.render("delbook",
            {
                nav,
                title:"Library",
                books
            });
        })
    });
    // Admin Console for Authors
        // Add New Author Form Page
        adminRouter.get('/add-authors',(req,res)=>{
            res.render('add-authors',
            {
                nav,
                title:'Library'
            });
        });
    // Adding New Author to Database
    adminRouter.post('/add-authors',(req, res)=>{
        var item = {
            author: req.body.author,
            book: req.body.book,
            details: req.body.details,
            image: req.body.image
        }
        var author = Authordata(item);
        author.save();
        res.redirect('add-authors');
    });
    // Editing an Existing Author Details in Database
    adminRouter.get('/edit-author/:id',(req,res, next)=>{
        const Authorid = req.params.id;
        Authordata.findOne({_id:objectId(Authorid)})
        .then((author)=>{
            res.render("edit-author",
            {
                nav,
                title:"Library",
                author
            })
        })

    });
    // Editing Existing Author Details from Database
    adminRouter.post('/edit-author/:id',(req,res, next)=>{
        const Authorid = req.params.id;
        var item = {
            author: req.body.author,
            book: req.body.book,
            details: req.body.details,
            image: req.body.image
        }
        var author = Authordata(item);
        // var book = Bookdata.findOne({_id:objectId(Bookid)});
        Authordata.updateOne({_id:objectId(Authorid)},{$set:{
            author: req.body.author,
            book: req.body.book,
            details: req.body.details,
            image: req.body.image
        }})
        .then(function (author){
            res.render('authoredit',{
                nav,
                title:"Library",
                author
            });
        })
        
    });
    // Deleting A Existing Author From Database
    adminRouter.get('/delete/:id',(req,res)=>{
        var Authorid = req.params.id;
        console.log(objectId(Authorid));
        Authordata.deleteOne({_id:objectId(Authorid)}, function (err, result) {

            if (err) {
    
                console.log("error query");
    
            } else {
                console.log(result);
    
            }
        })
        .then(function (author){
            res.render("delauthor",
            {
                nav,
                title:"Library",
                author
            });
        })
    });

    return adminRouter;
}
module.exports = router;
