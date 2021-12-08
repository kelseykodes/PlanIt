const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Party extends Model {}

Party.init(
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
    date: {
      type: DataTypes.INTEGER, //look up better format for the date
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'user',
        key: 'id',
      },
    },
      
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'party',
  }
);

module.exports = Party;
