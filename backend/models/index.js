const mongoose = require('mongoose')
const user = require('./user.js')

const uri = process.env.DATABASE_URL || "mongodb://localhost:27017/backendusers"

const connectDb = () => {
  return mongoose.connect(uri, { useNewUrlParser: true });
};

module.exports = {
  connectDb,
  models: {
    user
  }
} 