const BlogPost = require("../models/blogPost");

exports.create = (req, res, next) => {
  const blogPost = req.body;
  BlogPost.create(blogPost)
    .then(blogpost => res.status(201).send({ blogpost }))
    .catch(err => res.status(400).send({ err }));
};

exports.fetchAllPosts = (req, res, next) => {
  BlogPost.find({})
    .populate("author")
    .then(posts => res.status(200).send({ posts }))
    .catch(err => res.status(400).send({ err }));
};

exports.fetchPostByID = (req, res, next) => {
  const blogPostID = req.body.blogPostID;
  BlogPost.findById(blogPostID)
    .then(blogPost => res.send({ blogPost }))
    .catch(err => res.status(400).send({ err }));
};

exports.deleteBlogPost = (req, res, next) => {
  const blogPostID = req.body.blogPostID;
  BlogPost.findByIdAndRemove(blogPostID)
    .then(post => res.status(201).send({ post }))
    .catch(err => res.status(400).send({ err }));
};
