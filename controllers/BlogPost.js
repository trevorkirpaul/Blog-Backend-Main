const BlogPost = require('../models/blogPost')

exports.create = (req, res, next) => {
  const blogPost = req.body
  BlogPost.create(blogPost)
    .then(blogpost => res.status(201).send({ blogpost }))
    .catch(err => res.status(400).send({ err }))
}

exports.fetchAllPosts = (req, res, next) => {
  BlogPost.find({})
    .populate('author')
    .then(posts => res.status(200).send({ posts }))
    .catch(err => res.status(400).send({ err }))
}