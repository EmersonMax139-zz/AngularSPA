var express = require('express');
var router = express.Router();

const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

var Post = require("../models/post")

router.post('/', (req, res) => {
  var db = req.db;
  var name = req.body.name;
  var title = req.body.title;
  var post = req.body.post;

  var new_post = new Post({
    name,
    title,
    post,
  })

  new_post.save(function (error) {
    if (error) {
      console.log(error)
    }
    res.send({
      success: true,
      message: "Post saved successfully!"
    })
  })
})

// Fetch Posts (and sort)
router.get('/', (req, res) => {
  Post.find({}, 'name title post', function (error, posts) {
    if (error) { console.error(error); }
    res.send({
      posts: posts
    })
  }).sort({_id:-1})
})

module.exports = router;
