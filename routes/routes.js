const UserController = require('../controllers/User')

module.exports = app => {
  app.get('/', (req, res, next) => {
    res.send({ message: 'This is the parent level API' })
  })

  // ? USER
  // CREATE

  app.post('/user', UserController.create)
}