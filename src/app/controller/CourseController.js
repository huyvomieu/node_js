const Course = require("../Models/Course.js")
const { mongooseToObject } = require('../../until/mongoose.js')

class CourseController {
    // [GET] // course/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.slug })
            .then(course => {
                res.render('courses/show', { course: mongooseToObject(course) })
            })
            .catch(next)

    }
    // [GET] // courses/create
    create(req, res, next) {
        res.render('courses/create')
    }
    // [POST] // courses/store 
    store(req, res, next) {
        const FormData = req.body
        FormData.image = `http://img.youtube.com/vi/${req.body.videoId}/mqdefault.jpg`
        const course = new Course(FormData)
        course.save()
            .then(() => res.redirect('/me'))
            .catch(err => {

            })
    }
    // [GET] // courses/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then(course => res.render('courses/edit', { course: mongooseToObject(course) }))

    }
    // [PUT]  courses/:id
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(res.redirect('back'))
            .catch(next)

    }
    // [PATCH] course/:id/ restore
    restore(req, res, next) {
        Course.restore({ _id: req.params.id })
            .then(res.redirect('back'))
            .catch(next)

    }
    // [DELETE] courses/:id
    delete(req, res, next) {
        Course.delete({ _id: req.params.id })
            .then(res.redirect('back'))
            .catch(next)

    }
    // [DELETE] courses/:id/deleteVV
    deleteVV(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(res.redirect('back'))
            .catch(next)

    }
    // [] 
    formAction(req, res, next) {
        const cousersIds = req.body.courseIds
        switch (req.body.selectAction) {
            case 'delete':
                Course.delete({ _id: { $in: cousersIds } })
                    .then(res.redirect('back'))
                    .catch(next)
                break
            default:
                res.json("Lỗi!!")
        }
        res.json(cousersIds)
    }
}
module.exports = new CourseController()