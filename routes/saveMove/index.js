const move = require('express').Router();
const saveMove = require('./saveMove');


move.get('/:mesure', saveMove);



module.exports = move;