const { Collection, Content, Entry} = require('../../database/models');

const createContent = async (name) => {
  const newCollection = await Collection.create({ name });
  return Content.create({ name, collection_id: newCollection.id });
};

const editContentName = async (name, id) => {
  await Content.update({ name }, { where: { id } });
  const ContenttobeUpdated = await Content.findOne({ where: { id } });
  await Collection.update({ name }, { where: { id: ContenttobeUpdated.collection_id } });
  return { message: 'Updated Successfully' };
};

const addField = async (id, field, type) => {
  const content = await Content.findOne({ where: { id }});
  const Fields = { ...content.field };
  Fields[field] = type;
  await Content.update({ field: Fields }, { where: { id }});
  const Entries = await Entry.findAll({ where: { content_id: content.id } });
  await Promise.all(Entries.map((eachEntry) => {
    const newValue = { ...eachEntry.values };
    newValue[field] = null;
    Entry.update({ values: newValue}, { where: { id: eachEntry.id } });
  }));
  return { message: 'Field Added Successfully' };

};

const editField = async (id, oldfield, newfield) => {
  const content = await Content.findOne({ where: { id } });
  const newFields = { ...content.field };
  newFields[newfield] = newFields[oldfield];
  delete newFields[oldfield];
  await Content.update({ field: newFields }, { where: { id } });
  const allEntry = await Entry.findAll({ where: { content_id: content.id } });
  await Promise.all(allEntry.map((eachEntry) => {
    const newValue = { ...eachEntry.values };
    newValue[newfield] = newValue[oldfield];
    delete newValue[oldfield];
    Entry.update({ values: newValue}, { where: { id: eachEntry.id } });
  }));
  return { message: 'Edited Field Successfully' };

};
const deleteField = async (id, field) => {
  const content = await Content.findOne({ where: { id }});
  const newFields = { ...content.field };
  delete newFields[field];
  await Content.update({ field: newFields }, { where: { id }});
  const Entries = await Entry.findAll({ where: { content_id: content.id } });
  await Promise.all(Entries.map((eachEntry) => {
    const newValue = {...eachEntry.values };
    delete newValue[field];
    Entry.update({ values: newValue}, { where: { id: eachEntry.id } });
  }));
  return { message: 'Field Deleted Successfully' };
};



module.exports = { createContent, editContentName, addField, editField, deleteField};
