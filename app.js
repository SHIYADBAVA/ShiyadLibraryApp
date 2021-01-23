const express = require("express");
const Userdata = require("./src/model/Userdata");
const app = new express();
const port = process.env.PORT || 5000;
// const Userdata = require('../model/Userdata');
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
app.use(express.json());
app.use(express.urlencoded({ extended : true}));
const nav = [
    {
        link:"/books",name:"Books"
    },
    {
        link:"/authors",name:"Authors"
    }
    ]
const booksRouter = require("./src/routes/bookRoutes")(nav)
const authorsRouter = require('./src/routes/authorRoutes')(nav)
const userRouter = require('./src/routes/userRouters')(nav)
const adminRouter = require('./src/routes/adminRouter')(nav)
app.use(express.static('./public'));

app.use('/',userRouter);
app.use("/books",booksRouter);
app.use('/admin',adminRouter);
app.use('/authors',authorsRouter);
app.set('view engine','ejs');
app.set('views','./src/views');
app.get("/home",(req,res)=>{
    res.render("index",
    {
        nav,
        title:"Library"
    });
});
app.get('/',(req,res, next)=>{
    res.render('login',{
        title:'Library'
    });
});


app.post("/login",(req,res, next)=>{
    var username = req.body.username;
    var password = req.body.password;

    Userdata.findOne({username: username, password2: password}, (err, user)=>{
        if(!user)
        {
            console.log("Invalid input");
            return res.redirect('/')
        }
        else
        {
            res.render('index',{
                nav,
                title:"Library",
            });
            return res.status(200).send()
        }
        
    })
});



app.listen(port,()=>{ console.log("The Server is Ready at "+port)});