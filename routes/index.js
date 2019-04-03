const routes = require('express').Router();
const move = require('./saveMove');

routes.use('/saveMove', move);

routes.get('/',(req, res) =>{
    res.status(200).json({message : 'connected!'});
})

module.exports = routes;