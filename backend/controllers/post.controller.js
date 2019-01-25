const mongoose = require("mongoose");
const Post = mongoose.model("posts");

exports.getAll = async (req, res) => {
  const exists = await Post.find({});
  if (exists && exists.length > 0) {
    return res.status(200).send(exists);
  } else if (exists.length === 0) {
    return res.status(404).send({
      error: "There are no posts."
    })
  }
  return res.status(400).send({
    error: "There was a problem."
  })
}
exports.getOne = async (req, res) => {
  const exists = await Post.findById(req.params.id);
  if (exists) {
    return res.status(200).send(exists);
  }
  return res.status(404).send({
    error: "Post not found"
  })
}
exports.postOne = async (req, res) => {
  const newPost = await new Post(req.body).save();
  res.status(200).send({
    postAdded: req.body
  })
}
exports.putOne = async (req, res) => {
  const exists = await Post.findById(req.params.id);
  if (exists) {
    const response = await Post.findByIdAndUpdate(req.params.id, req.body);
    return res.status(200).send(response);
  }
  return res.status(404).send({
    error: "Post not found"
  })
}
exports.deleteOne = async (req, res) => {
  const exists = await Post.findById(req.params.id);
  if (exists) {
    const response = await Post.findByIdAndDelete(req.params.id);
    return res.status(200).send(response);
  }
  return res.status(404).send({
    error: "Post not found"
  })
}