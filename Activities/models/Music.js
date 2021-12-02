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
    music_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    singer: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    music_list_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'musicList',
        key: 'id',
        unique: false
      }
    }
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