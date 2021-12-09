const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Music extends Model {}

Music.init(
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
    singer: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    theme: {
      type: DataTypes.STRING,
      allowNull: false
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
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'music',
  }
);

module.exports = Music;