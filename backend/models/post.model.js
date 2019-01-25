const mongoose = require("mongoose");
const {
  Schema
} = mongoose;

const PostModel = new Schema({
  title: String,
  content: String
})

const Post = mongoose.model("posts", PostModel);
module.exports = Post;