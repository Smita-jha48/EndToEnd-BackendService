const { contentService } = require('../services');

const createContent = async (req, res) => {
  try {
    const { name } = req.body;
    const ContentType = await contentService.createContent(name);
    res.status(201).json({
      data: ContentType
    });
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};

module.exports = { createContent};