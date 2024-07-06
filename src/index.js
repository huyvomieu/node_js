const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const route = require('./routes');
const app = express();
const db = require("./config/db")
var methodOverride = require('method-override')

const port = 3000;
// HTTP logger
// app.use(morgan('combined'))
app.use(
  express(
    express.urlencoded({
      extended: true,
    }),
  ),
);

app.use(express.static(path.join(__dirname, 'public')));
app.use(methodOverride('_method'))
app.engine(
  'hbs',
  handlebars.engine({
    extname: '.hbs',
    helpers: {
      sum: (a, b) => a + b,
    }
  }),
);

app.set('view engine', 'hbs');

app.set('views', path.join(__dirname, 'recourses', 'views'));

// route itit
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
route(app);
app.listen(port, () => {
  console.log(` app listening on port ${port}`);
});

// connect db

db.connect()
