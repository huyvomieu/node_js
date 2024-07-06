const Course = require("../Models/Course.js")
const { multipleMongooseToObject } = require('../../until/mongoose.js')
class SiteController {
  // GET   / home
  index(req, res, next) {
    // res.render('home');
    Course.find({})
      .then(courses => {
        res.render('home', {
          courses: multipleMongooseToObject(courses)
        })
      })
      .catch(next);
  }
  // [GET]  // search
  search(req, res) {
    res.render('search');
  }
}

module.exports = new SiteController();
