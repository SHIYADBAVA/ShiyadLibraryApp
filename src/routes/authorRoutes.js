const express = require("express");
const authorsRouter = express.Router();
const Authordata = require("../model/Authordata");
function router(nav)
{
    // List of All Authors Page
    authorsRouter.get("/",(req,res)=>{
        Authordata.find()
        .then((authors)=>{
            res.render("authors",
            {
                nav,
                title:"Library",
                authors
            });
        })
    });
    // Accessing A Single Author
    authorsRouter.get("/:id",(req,res)=>{
        const id = req.params.id
        Authordata.findOne({_id:id})
        .then(function(author){
            res.render("author",{
                nav,
                title:"Library",
                author
            })
        })
        
    })

    return authorsRouter;
}
module.exports = router;