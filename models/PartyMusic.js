const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class PartyMusic extends Model { }

PartyMusic.init(
    {
      music_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'music',
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
      modelName: 'partymusic',
    }
  );
  
  module.exports = PartyMusic;