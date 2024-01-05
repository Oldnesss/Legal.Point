const express = require('express');
const { Firm } = require('../../db/models');

const apiFirmRouter = express.Router();

apiFirmRouter
  .route('/')
  .get(async (req, res) => {
    try {
      const posts = await Firm.findAll({
        order: [['updatedAt', 'DESC']],
      });
      res.json(posts);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  })
  .post(async (req, res) => {
    try {
      const { name, image, title, description, body } = req.body;
      const post = await Firm.create({
        name,
        image,
        title,
        description,
        body,
      });
      res.status(201).json(post);
    } catch (error) {
      console.log(error);
      res.status(500).json(error);
    }
  });

apiFirmRouter.route('/:id').delete(async (req, res) => {
  try {
    const post = await Firm.findByPk(req.params.id);
    if (!post) {
      return res.status(404).json({ message: 'Post not found' });
    }
    await post.destroy();
    res.sendStatus(200);
  } catch (error) {
    console.log('Error delete', error);
    res.status(500).json(error);
  }
});

apiFirmRouter.route('/edit/:id').put(async (req, res) => {
  try {
    const post = await Firm.findByPk(req.params.id);
    await post.update(req.body);
    res.json(post);
  } catch (error) {
    console.log('Error put', error);
    res.status(500).json(error);
  }
});

module.exports = apiFirmRouter;
