const express = require('express');
const route = express.Router(); 
const indexController = require ('../Controller/index.controller.js');

route.get('/inicio', indexController.test);

module.exports = route;

