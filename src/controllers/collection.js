const { collectionService } = require('../services');
const allCollections = async (req, res) => {
  try {
    const allCollections = await collectionService.allCollections();
    res.status(200).json({
      data: allCollections
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

module.exports = { allCollections };