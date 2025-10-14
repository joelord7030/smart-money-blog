const express = require('express');
const router = express.Router();
const Post = require('../models/Post');

// Simple in-memory demo data if Mongo not connected
let demoPosts = [
  {
    _id: '1',
    title: 'How to Start Investing with ₦10,000',
    slug: 'start-investing-10000',
    summary: 'A short guide for beginners in Nigeria',
    content: 'Start by saving small amounts, use micro-investing platforms, diversify...'
  },
  {
    _id: '2',
    title: 'Understanding Mutual Funds',
    slug: 'understanding-mutual-funds',
    summary: 'What mutual funds are and how to choose',
    content: 'Mutual funds pool money from many investors...'
  }
];

// GET /api/posts
router.get('/', async (req, res) => {
  try {
    if (await isMongoAvailable()) {
      const posts = await Post.find().sort({ createdAt: -1 }).limit(50);
      return res.json(posts);
    }
    return res.json(demoPosts);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// GET /api/posts/:slug
router.get('/:slug', async (req, res) => {
  try {
    const { slug } = req.params;
    if (await isMongoAvailable()) {
      const post = await Post.findOne({ slug });
      if (!post) return res.status(404).json({ error: 'Not found' });
      return res.json(post);
    }
    const post = demoPosts.find(p => p.slug === slug);
    if (!post) return res.status(404).json({ error: 'Not found' });
    res.json(post);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// POST /api/posts
router.post('/', async (req, res) => {
  try {
    const { title, slug, summary, content } = req.body;
    if (!title || !slug) return res.status(400).json({ error: 'title & slug required' });

    if (await isMongoAvailable()) {
      const existing = await Post.findOne({ slug });
      if (existing) return res.status(400).json({ error: 'slug must be unique' });
      const newPost = await Post.create({ title, slug, summary, content });
      return res.status(201).json(newPost);
    }

    const newPost = { _id: String(Date.now()), title, slug, summary, content };
    demoPosts.unshift(newPost);
    res.status(201).json(newPost);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

async function isMongoAvailable() {
  const mongoose = require('mongoose');
  return mongoose.connection && mongoose.connection.readyState === 1;
}

module.exports = router;
