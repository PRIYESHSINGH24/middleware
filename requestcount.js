const express = require('express');

const app = express();

let requestcount = 0;

app.use(function(req, res, next){
    requestcount = requestcount + 1;
    next();
})

app.get('/user', function(req ,res){
    res.status(200).json({name : 'hellluuuuuuuuu  motuuuuuu ki haal chaal baa'});
});

app.get('/user', function(req ,res){
    res.status(200).json({name : 'created a dummy user for the running of the website'});
});

app.get('/requestcount', function (req, res){
    res.status(200).json({requestcount});
});

app.listen(3000);


