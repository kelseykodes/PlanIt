const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class PartyDecoration extends Model { }

PartyDecoration.init(
    {
      decoration_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'decoration',
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
      modelName: 'partydecoration',
    }
  );
  
  module.exports = PartyDecoration;