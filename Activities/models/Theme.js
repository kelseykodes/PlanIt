const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Theme extends Model {}

Theme.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    theme_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'theme',
  }
);

module.exports = Theme;