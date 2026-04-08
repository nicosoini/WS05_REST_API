const express = require('express');
const mongoose = require('mongoose');

const Post = require('../models/Post');

const router = express.Router();

function isValidObjectId(id) {
  return mongoose.Types.ObjectId.isValid(id);
}

router.post('/', async (req, res) => {
try {
    const post = new Post(req.body);
    const savedPost = await post.save();
    return res.status(201).json(savedPost);
  } catch (err) {

  return res.status(400).json({ error: err.message });
  }
});

router.get('/', async (req, res) => {

  try {
    const posts = await Post.find();
    return res.status(200).json(posts);
  } catch (err) {}

  return res.status(501).json({ message: 'TODO: implement GET /api/posts' });
});

router.get('/:id', async (req, res) => {
  if (!isValidObjectId(req.params.id)) {
    return res.status(400).json({ error: 'Invalid post id' });
  }
  try {
    const post = await Post.findById(req.params.id);
    if (post) {
      return res.status(200).json(post);
    } else {
      return res.status(404).json({ error: 'Post not found'});
    }
  } catch (err) {}

  return res.status(501).json({ message: 'TODO: implement GET /api/posts/:id' });
});

router.put('/:id', async (req, res) => {
  if (!isValidObjectId(req.params.id)) {
    return res.status(400).json({ error: 'Invalid post id' });
  }
  try {
    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, { new: true })
    if (updatedPost) {
      return res.status(200).json(updatedPost)
    } else {
      return res.status(404).json({ error: 'Post not found'})
    }
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
});

router.delete('/:id', async (req, res) => {
  if (!isValidObjectId(req.params.id)) {
    return res.status(400).json({ error: 'Invalid post id' });
  }
  try {
    const result = await Post.findByIdAndDelete(req.params.id);
    if (result) {
      return res.status(200).json({ message: 'Post deleted successfully' });
    } else {
      return res.status(404).json({ error: 'Post not found' });
    }
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

module.exports = router;