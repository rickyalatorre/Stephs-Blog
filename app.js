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

const postSchema = new mongoose.Schema({postTitle: String, postParagraph: String});

const Post = mongoose.model("Post", postSchema);


app.get("/", function(req, res) {
  Post.find({}, function(err, foundItems) {
    res.render("home", {
      postsHome: foundItems
    })
  })

});

app.post("/oshkosh", function(req, res) {
  const postTitle = req.body.postTitle;
  const postParagraph = req.body.postParagraph;
  const post =new Post({
    postTitle: postTitle,
     postParagraph: postParagraph
  });
  post.save(function(err){
    if (!err){
      res.redirect("/");
    }
  });

});


app.get("/posts/:postId", function(req, res) {

  let postId = req.params.postId;

Post.findOne({_id:postId}, function(err,post){
    res.render("post", {
     title: post.postTitle,
     content: post.postParagraph
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

app.listen(3000, function() {
  console.log("Server on port on 3000");
});
