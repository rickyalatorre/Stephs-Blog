require('dotenv').config()
const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require('lodash');
const mongoose = require("mongoose");
const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://admin-ricky:pulga1160@cluster0.r9wzo.mongodb.net/stephDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const postSchema = new mongoose.Schema({image:String, postTitle: String, paragraphs: [String]});

const Post = mongoose.model("Post", postSchema);

app.get("/", function(req, res) {
  Post.find({}, function(err, foundItems) {
    res.render("home", {
      postsHome: foundItems
    })
  })

});

app.post("/oshkosh", function(req, res) {
  console.log('sent to /oshkosh')
  const postTitle = req.body.postTitle;
  const paragraphs = req.body.paragraphs;
  const image = req.body.image;
  const post =new Post({
    image: image,
    postTitle: postTitle,
     paragraphs: paragraphs
  });
  post.save(function(err){
    if (!err){
      res.redirect("/");
    }
  });

});


app.get("/posts/:postId/", function(req, res) {

  let postId = req.params.postId;

Post.findOne({_id:postId}, function(err,post){
    res.render("post", {
      image:post.image,
     title: post.postTitle,
     content: post.paragraphs
   })
})
});

app.get("/about", function(req, res) {
  res.render("about")
});

app.get("/contact", function(req, res) {
  res.render("contact")
});

app.get("/oshkosh", function(req, res) {
  res.render("oshkosh")
});

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, function() {
  console.log(`Server has started on port ${port}`);
});
