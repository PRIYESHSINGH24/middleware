const express = require('express');
// an express functionality is a series of middlewares of function is called
const app = express();

// middleware function are the function which have the req res object and the next object of the file or the data

function isOldEnough(age){
    if (age >= 14){
        return true;
    } else {
        return false;
    }
}


function isOldEnoughmiddleware(req, res, next){
    const age = req.query.age;
    if (age >= 14){
        next ( );
    } else {
        res.json({
            msg: "Sorry you are not of age yet",
        })
    }
}

app.get('/ride1',isOldEnoughmiddleware, function(req, res){
    if (isOldEnough(req.query.age)) {
        // req.query.age is for reading the response of the the user fromt he url tab using the 
        res.json({
            msg: "You have sucessfully riden the ride 1"
        })
    } else {
        res.status(411).json({
            msg: "Sorry Friend"
        })
    }
})

app.get('/ride2',isOldEnoughmiddleware, function(req, res){
    // isoldenoughmiddleware is the middleware jo ki sure karega ki function ke run hone se phele woh middleware run ho jaye then woh run hoga 
    if (isOldEnough(req.query.age)) {
        // req.query.age is for reading the response of the the user fromt he url tab using the 
        res.json({
            msg: "You have sucessfully riden the ride 2"
        })
    } else {
        res.status(411).json({
            msg: "Sorry Friend"
        })
    }
})

app.listen(3000);