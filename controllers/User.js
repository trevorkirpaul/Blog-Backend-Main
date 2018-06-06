const User = require('../models/user')
const jwt = require('../services/jwt')
const { createToken, readToken } = jwt

// create user
exports.create = (req, res, next) => {
  const user = req.body
  User.create(user)
    .then(user => res.status(201).send({ token: createToken(user._id), user }))
    .catch(err => res.status(400).send({ err }))
}