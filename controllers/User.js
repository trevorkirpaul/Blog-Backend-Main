const User = require("../models/user");
const jwt = require("../services/jwt");
const { createToken, readToken } = jwt;

// create user
exports.create = (req, res) => {
  const user = req.body;
  User.create(user)
    .then(user => res.status(201).send({ token: createToken(user._id), user }))
    .catch(err => res.status(400).send({ err }));
};

// auth user
exports.authUser = (req, res) => {
  const userID = readToken(req.body.token).userID;
  User.findById(userID)
    .then(user => {
      if (user) {
        return res.status(200).send({ auth: true });
      }
      return res.status(400).send({ auth: false });
    })
    .catch(err => res.status(400).send({ err }));
};

// sign in
exports.signIn = (req, res) => {
  const userID = req.user._id;
  const token = createToken(userID);

  res.send({
    userID,
    token,
    auth: true
  });
};
