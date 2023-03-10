const { entryService } = require('../services');

const addEntries = async (req, res) => {
  try {
    const { collection_id, entry } = req.body;
    const newEntry = await entryService.addEntries(collection_id, entry);
    res.status(201).json({
      data: newEntry
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

const editEntry = async (req, res) => { 
  try {
    const { collection_id, entry } = req.body;
    const newEntry = await entryService.editContentOfCollection(collection_id, entry);
    res.status(201).json({
      data: newEntry
    });
  } catch (error) { 
    res.status(500).json({
      error: error.message,
    });
  }
};

const deleteEntry = async (req, res) => {
  try {
    const { collection_id, entry_id } = req.body;
    const deletedContent = await entryService.deleteContentOfCollection(collection_id, entry_id);
    res.status(200).json({
      data: deletedContent
    });
  } catch (error) { 
    res.status(500).json({
      error: error.message,
    });
  }
};

const allCollections = async (req, res) => {
  try {
    const allCollections = await entryService.allCollections();
    res.status(200).json({
      data: allCollections
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });
  }
};

const getEntries = async (req, res) => {
  try {
    const { collection_id } = req.body;
    const allEntries = await entryService.getEntries(collection_id);
    res.status(200).json({
      data: allEntries
    });
  } catch (error) {
    res.status(500).json({
      error: error.message,
    });    
  }
};

module.exports = { addEntries,editEntry,deleteEntry,allCollections,getEntries,
};