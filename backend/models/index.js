const mongoose = require('mongoose')
const user = require('./user.js')
const role = require('./role.js')

const uri = "mongodb://localhost:27017/backendusers"

const ROLES = ["user", "admin"];

const connectDb = () => {
  return mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true });
};

module.exports = {
  connectDb,
  models: {
    user,
    role,
    ROLES
  }
} 