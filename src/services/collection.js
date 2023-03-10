const { Collection} = require('../../database/models');

const allCollections = async () => {
  return Collection.findAll();
};

module.exports = {  allCollections};