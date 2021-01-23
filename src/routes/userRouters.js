const express = require("express");
const usersRouter = express.Router();
const Userdata = require('../model/Userdata');
const bcrypt = require("bcryptjs");
usersRouter.use(express.json());
usersRouter.use(express.urlencoded({ extended : true}));
function router()
{
    usersRouter.get('/signup',(req,res, next)=>{
        res.render('signup',{
            title:'Library'
        });
    });
    // Storing Sign-Up data of user to Database
    usersRouter.post('/signup',(req,res, next)=>{
        // Storing Password of user in Encrypted format
        bcrypt.hash(req.body.password, 10, function(err, hash)
        {
        var item = new Userdata ({
             Name:req.body.Name,
             username:req.body.username,
             email:req.body.email,
             phone:req.body.phone,
             password: hash,
             password2: req.body.password
        })
        var user = Userdata(item);
        user.save()
        res.render('login',
        {
            title:'Library'
        });
    });
});
    return usersRouter;
}
module.exports = router;
