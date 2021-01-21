const express = require("express");
const addAuthorRouter = express.Router();
const Authordata = require("../model/Authordata");
var objectId=require('mongodb').ObjectID
addAuthorRouter.use(express.json());
addAuthorRouter.use(express.urlencoded({ extended : true}));
function router(nav)
{
    // // Add New Author Form Page
    // addAuthorRouter.get('/add-authors',(req,res)=>{
    //     res.render('add-authors',
    //     {
    //         nav,
    //         title:'Library'
    //     });
    // });
    // Adding New Author to Database
    // addAuthorRouter.post('/add-authors',(req, res)=>{
    //     var item = {
    //         author: req.body.author,
    //         book: req.body.book,
    //         details: req.body.details,
    //         image: req.body.image
    //     }
    //     var author = Authordata(item);
    //     author.save();
    //     res.redirect('add-authors');
    // });
    // addAuthorRouter.get('/add-authors/edit-author/:id',(req,res, next)=>{
    //     const Authorid = req.params.id;
    //     Authordata.findOne({_id:objectId(Authorid)})
    //     .then((author)=>{
    //         res.render("edit-author",
    //         {
    //             nav,
    //             title:"Library",
    //             author
    //         })
    //     })

    // })
    return addAuthorRouter;
}
module.exports = router;
