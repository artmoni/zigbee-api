const routes = require('express').Router();
const move = require('./saveMove');
const data = require('./getData');

routes.use('/saveMove', move);

routes.use('/getData', data);

routes.get('/',(req, res) =>{
    res.status(200).json({message : 'connected!'});
})

module.exports = routes;