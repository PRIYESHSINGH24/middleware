const express = require('express');

const app = express();

function standardmiddleware(req, res, next){
    if (a >= 10){
        next( );
    }
    else {
        res.json({
            msg: "Chl aaja kuch aur try karte h"
        })
    }
}


