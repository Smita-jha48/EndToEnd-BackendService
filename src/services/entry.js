const { Collection, Content, Entry } = require('../../database/models');

const addEntries = async (collection_id, entry) => {
  const collection = await Collection.findOne({ where: { id: collection_id }, include: Content });
  if (!collection) {
    throw new Error('Collection not found');
  }
  
  const Entries = await Entry.create({
    collection_id,
    content_id: collection.Content.id,
    values: entry,
  });
  return Entries;
};

const editEntry = async (collection_id, entry ) => {
  const collection = await Collection.findOne({ where: { id: collection_id } });
  if (!collection) {
    throw new Error('Collection not found');
  }
  await Entry.update({ values: entry.values }, { where: { id: entry.id } });
  return { message: 'Updated Succefully' };
};

const deleteEntry = async (collection_id, entry_id) => { 
  const collection = await Collection.findOne({ where: { id: collection_id } });
  if (!collection) {
    throw new Error('Collection not found');
  }
  await Entry.destroy({ where: { id: entry_id } });
  return { message: 'Deleted Succefully' };
};

const allCollections = async () => {
  return Collection.findAll();
};

const getEntries = async (collection_id) => {
  const collection = await Collection.findOne({ where: { id: collection_id }, include: Entry });
  if (!collection) {
    throw new Error('Collection not found');
  }
  return collection.Entries;
};

module.exports = {  allCollections, getEntries, addEntries, editEntry, deleteEntry };