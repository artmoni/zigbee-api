const data = require('express').Router();
const getData = require('./getData');


data.get('/', getData);



module.exports = data;