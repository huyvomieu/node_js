const Course = require("../Models/Course.js")
const { multipleMongooseToObject } = require('../../until/mongoose.js')

class MeController {
    // [GET]  /me
    myCourse(req, res, next) {
        Promise.all([Course.countDocumentsWithDeleted({ deleted: true }), Course.find({})])
            .then(([deletedCourses, courses]) => {
                res.render("me/myCourses", {
                    deletedCourses,
                    courses: multipleMongooseToObject(courses)
                })
            })
        // Course.find({})
        //     .then(courses => res.render("me/myCourses", { courses: multipleMongooseToObject(courses) }))
        //     .catch(next)
    }

    // [GET]  /me/trash/courses
    trash(req, res, next) {
        Course.findWithDeleted({ deleted: true })
            .then(courses => res.render("me/myTrash", { courses: multipleMongooseToObject(courses) }))
            .catch(next)

    }

}
module.exports = new MeController()