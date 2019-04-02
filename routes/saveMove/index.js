const move = require('express').Router();


move.use('/',function(req, res, next){
    console.log("mouvement le " + Date.now());
});



module.exports = move;