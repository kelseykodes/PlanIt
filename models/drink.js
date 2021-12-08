const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Drinks extends Model {}

Drinks.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    ingredients: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    hasAlcohol: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
    },
    party_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'party',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'drinks',
  }
);

module.exports = Drinks;
