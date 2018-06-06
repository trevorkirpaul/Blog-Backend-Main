const UserController = require('../controllers/User')
const BlogPostController = require('../controllers/BlogPost')
const passportService = require('../services/passport')
const passport = require('passport')
const reqSignIn = passport.authenticate('local', { session: false })
const requireAuth = passport.authenticate('jwt', { session: false })

module.exports = app => {
  app.get('/', (req, res, next) => {
    res.send({ message: 'This is the parent level API' })
  })

  // ? USER

  // CREATE
  app.post('/user', UserController.create)

  // SIGN IN
  app.post('/signin', reqSignIn, UserController.signIn)

  // AUTH
  app.post('/auth', UserController.authUser)

  // ? BLogPost

  // CREATE
  app.post('/blogpost', BlogPostController.create)

  // FETCH ALL
  app.get('/blogpost', BlogPostController.fetchAllPosts)

}