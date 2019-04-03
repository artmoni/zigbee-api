const move = require('express').Router();
const saveMove = require('./saveMove');


move.get('/sensor/:id', saveMove);



module.exports = move;