const User = require('../models/user')

getUsers = (req, res, next) => {
  var query;
  if (req.query.username) {
    query = User.find({
      username: req.query.username
    })
  } else {
    query = User.find()
  }
  query.exec().then((users) => {
    return res.status(200).send(users)
  }).catch((error) => next(error))
}

getUserById = (req, res, next) => {
  User.findById(req.params.id).then((user) => {
    return res.status(200).send(user)
  }).catch((error) => next(error))
}

createUser = (req, res, next) => {
  const body = req.body
  User.create({
      username: body.username,
      password: body.password,
      gamesWishList: body.gamesWishList
    })
    .then((user) => {
      return res.status(201).send(user)
    })
    .catch(error => next(error))
}

updateUser = (req, res, next) => {
  const body = req.body
  User.updateOne({
    _id: req.params.id
  }, {
    username: body.username,
    password: body.password,
    gamesWishList: body.gamesWishList
  }, {
    new: true,
    upsert: true,
    runvalidators: true,
  }).then((status) => {
    User.findById(req.params.id)
      .then((user) => {
        if (status.upserted)
          res.status(201).send(user)
        else if (status.nModified)
          res.status(200).send(user)
        else
          res.status(204)
        res.send()
      }).catch((error) => next(error))
  })
}

deleteUser = (req, res, next) => {
  User.findByIdAndDelete(req.params.id).then((deleted) => {
    if (deleted)
      return res.send(deleted).status(200)
    res.sendStatus(404)
  }).catch((error) => next(error))
}

module.exports = {
  getUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser
}