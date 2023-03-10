'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Entry extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Entry.belongsTo(models.Content, { foreignKey: 'content_id' });
      Entry.belongsTo(models.Collection, { foreignKey: 'collection_id' });
    }
  }
  Entry.init({
    values: DataTypes.JSON,
    content_id: DataTypes.INTEGER,
    collection_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Entry',
  });
  return Entry;
};