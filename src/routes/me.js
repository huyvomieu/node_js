const express = require('express')
const Router = express.Router()
const MeController = require('../app/controller/MeController')

Router.get('/trash/courses', MeController.trash)
Router.get('/', MeController.myCourse)

module.exports = Router
