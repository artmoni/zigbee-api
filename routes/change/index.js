const change = require('express').Router();
const moneyChange = require('./moneyChange');


change.get('/:amount', moneyChange);


module.exports = change;