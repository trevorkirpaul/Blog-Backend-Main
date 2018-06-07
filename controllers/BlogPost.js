const BlogPost = require("../models/blogPost");
const User = require("../models/user");
const jwt = require("../services/jwt");
const { readToken } = jwt;

exports.create = (req, res, next) => {
  const blogPostInfo = req.body.blogPost;
  const decodedToken = readToken(req.body.token);

  const blogPost = {
    ...blogPostInfo,
    author: decodedToken.userID
  };

  //auth
  User.findById(decodedToken.userID)
    .then(() => BlogPost.create(blogPost))
    .then(newBlogPost => res.status(201).send({ blogpost: newBlogPost }))
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
