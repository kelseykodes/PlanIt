const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class MusicList extends Model {}

MusicList.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    musicList_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    theme_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'theme',
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
    modelName: 'musicList',
  }
);

module.exports = MusicList;