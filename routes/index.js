const routes = require('express').Router();
//const change = require('./change');

//routes.use('/change', change);

routes.get('/',(req, res) =>{
    res.status(200).json({message : 'connected!'});
})

module.exports = routes;