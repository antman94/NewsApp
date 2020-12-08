mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },
  password: {
    type: String,
  },
  gamesWishList: {
    type: Array
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;