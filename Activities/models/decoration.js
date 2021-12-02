// QUICK NOTES: 
// Here is where we set up our Decorations model, for when we are ready to connect to our TBD database. 
// deco = decoration
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Decoration extends Model { }

Decoration.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    deco_id: {
      type: DataTypes.INTEGER,
      //a reference of the `id` of the `Category` that owns this Decoration
      references: {
        model: 'category',
        key: 'id',
      },
    },
    deco_name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      validate: {
        isDecimal: true
      }
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'decoration',
  }
);

module.exports = Decoration;


// //guest aren't required to bring a decoration:
// guest_name: {
//   type: DataTypes.STRING,
//   allowNull: true,
// },