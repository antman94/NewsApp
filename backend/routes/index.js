const express = require('express')
const router = express.Router()

const user = require('./user.js')

router.get("/user", user.getUsers)
router.get("/user/:id", user.getUserById)
router.post("/user", user.createUser)
router.put("/user/:id", user.updateUser)
router.delete("/user/:id", user.deleteUser)

module.exports = router