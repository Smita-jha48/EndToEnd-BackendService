'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Content extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
        static associate(models) {
            Content.hasMany(models.Entry, { foreignKey: 'content_id' });
            Content.belongsTo(models.Collection, { foreignKey: 'collection_id' });
            // define association here
        }
    }
    Content.init({
        name: DataTypes.STRING,
        fields: DataTypes.JSON,
        collection_id: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Content',
    });
    return Content;
};