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

const getAllContent = async (req, res) => {
  try {
    const Allcontent = await contentService.getAllContent();
    res.status(200).json({
      data: Allcontent
    });
  }
  catch(error) {
    res.status(500).json({
      error: error.message
    });
  }

};

const editContentName = async (req, res) => {
  try {
    const { name, id } = req.body;
    const updateStatus = await contentService.editContentName(name, id);
    res.status(200).json({
      data: updateStatus
    });
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};

const addField = async (req,res) => {
  try {
    const {id, field, type} = req.body;
    const updatedContent = await contentService.addField(id, field, type);
    res.status(200).json({
      data: updatedContent
    });
  }
  catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};

const editField = async (req, res) => { 
  try {
    const { id, oldfield, newfield } = req.body;
    const updatedContent = await contentService.editField(id, oldfield, newfield);
    res.status(200).json({
      data: updatedContent
    });
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};

const deleteField = async (req, res) => {
  try {
    const { id, field } = req.body;
    const updatedContent = await contentService.deleteField(id, field);
    res.status(200).json({
      data: updatedContent
    });
  } catch (error) {
    res.status(500).json({
      error: error.message
    });
  }
};
  


module.exports = {getAllContent, createContent, editContentName, addField, editField, deleteField};