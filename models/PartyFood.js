const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class PartyFood extends Model { }

PartyFood.init(
    {
      food_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'food',
          key: 'id',
        }
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
      modelName: 'partyfood',
    }
  );
  
  module.exports = PartyFood;