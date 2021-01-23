const Userdata = require("./src/model/Userdata");
const Userdata = require('../model/Userdata');
const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
app.use(express.json());
app.use(express.urlencoded({ extended : true}));

const form = document.querySelector("form");
const password = document.getElementById("pwd");
const username = document.getElementById("username");

form.addEventListener("submit", onsubmitfunction);

function onsubmitfunction(event)
{
    if(username.value === "" || password.value === "")
    {
        console.log(username,password);
        event.preventDefault();
        alert("Please fill the input fields..");
        return false;    
    }
    else
    {
        bcrypt.compare(password.value, hash, function(err, result) {
            // result == true
            return true;
        });
        return true;
    }
}

// const form = document.querySelector("form");
// const username = document.querySelector("input[type=text]");
// const password = document.querySelector("input[type=password]");

// form.addEventListener("submit", onsubmitfunction);

// function onsubmitfunction(event)
// {
//     if(username.value === "" || password.value === "")
//     {
//         event.preventDefault();
//         alert("Please Fill The Empty Fields..");
//         return false;
//     }
//     else
//     {
//         if(user)
//         bcrypt.compare(req.body.password, hash, function(err, result) {
//             // result == true
//             return true;
//         });
        
//         // if(email.value === "admin@test.com" && password.value === "12345")
//         // {
//         //     return true;
//         // }
//         else
//         {
//             event.preventDefault();
//             alert("Invalid Credentials..!");
//             return false;
//         }
//     }
// }

function submitfunc(){
    alert("Invalid Credentials..!");
}

