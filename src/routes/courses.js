const express = require('express')
const Router = express.Router()
const CoursesController = require('../app/controller/CourseController')

Router.get('/create', CoursesController.create)
Router.post('/formAction', CoursesController.formAction)
Router.put('/:id', CoursesController.update)
Router.patch('/:id/restore', CoursesController.restore)
Router.post('/store', CoursesController.store)
Router.get('/:slug', CoursesController.show)
Router.get('/:id/edit', CoursesController.edit)
Router.delete('/:id', CoursesController.delete)
Router.delete('/:id/deleteVV', CoursesController.deleteVV)
module.exports = Router
