const express = require("express");
const cors = require("cors")
const bodyParser = require("body-parser");

const routes = require("./routes")
const db = require("./models")
const Role = db.models.role;
require('./app/routes/auth.routes')(app);
require('./app/routes/user.routes')(app);

const app = express();
app.use(cors());

// environment variable PORT or 3000 if unset
const port = process.env.PORT || 4000;

// Add middleware for parsing the body to req.body
// middlewares are executed in the order added, so add before routes
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use((error, req, res, next) => {
  if (res.headersSent) {
    return next(err)
  }
  res.status(error.statusCode || error.status || 500).send({error: error })
})

app.use((req, res, next) => {
  req.models = db.models
  next()
})

app.use('/', routes)

// Start up the database, then the server and begin listen to requests
if(process.env.NODE_ENV != "test") {
  db.connectDb().then(() => {
    const listener = app.listen(port, () => {
      console.info(`Server is listening on port ${listener.address().port}.`);
    })
    .then(() => {
      console.log("Successfully connect to MongoDB.");
      initial();
    })
  }).catch((error) => {
    console.error(error)
  })
}
function initial() {
  Role.estimatedDocumentCount((err, count) => {
    if (!err && count === 0) {
      new Role({
        name: "user"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'user' to roles collection");
      });

      new Role({
        name: "admin"
      }).save(err => {
        if (err) {
          console.log("error", err);
        }

        console.log("added 'admin' to roles collection");
      });
    }
  });
}

module.exports = app