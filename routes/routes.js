const UserController = require('../controllers/User')
const BlogPostController = require('../controllers/BlogPost')

module.exports = app => {
  app.get('/', (req, res, next) => {
    res.send({ message: 'This is the parent level API' })
  })

  // ? USER

  // CREATE
  app.post('/user', UserController.create)

  // ? BLogPost

  // CREATE
  app.post('/blogpost', BlogPostController.create)

  // FETCH ALL
  app.get('/blogpost', BlogPostController.fetchAllPosts)

}