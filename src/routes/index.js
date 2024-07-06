const newsRouter = require('./News');
const siteRouter = require('./Site');
const coursesRouter = require('./courses');
const meRouter = require('./me');
function route(app) {
  app.use('/news', newsRouter);
  app.use('/courses', coursesRouter);
  app.use('/me', meRouter);

  // app.use('/search', siteRouter)

  app.use('/', siteRouter);
}

module.exports = route;
