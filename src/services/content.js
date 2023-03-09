const { Collection, Content} = require('../../database/models');

const createContent = async (name) => {
    const newCollection = await Collection.create({ name });
    return Content.create({ name, collection_id: newCollection.id });
};

module.exports = { createContent };
