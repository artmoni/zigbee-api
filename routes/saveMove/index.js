const move = require('express').Router();
const saveMove = require('./saveMove');


move.get('/:move/id/:id', saveMove);



module.exports = move;