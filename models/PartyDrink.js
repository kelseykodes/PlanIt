const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class PartyDrink extends Model { }

PartyDrink.init(
    {
      drink_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'drink',
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
      modelName: 'partydrink',
    }
  );
  
  module.exports = PartyDrink;