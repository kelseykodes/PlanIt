const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class PartyActivities extends Model { }

PartyActivities.init(
    {
      activities_id: {
        type: DataTypes.INTEGER,
        references: {
          model: 'activities',
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
      modelName: 'partyactivities',
    }
  );
  
  module.exports = PartyActivities;