const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Activities extends Model {}

Activities.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },//Need this 
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },//Knowing what type of activities that we are going to be doing will help to narrow it down
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },//name of that activities example- uno ...
    description_of_activities: {
      type: DataTypes.STRING,
      allowNull: false,
    },//quick descripition 
    minNum_participants: {
      type: DataTypes.STRING,
      allowNull: false,
    },//number of participants required for activity 
    duration: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },//how long will it take in mins
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
    modelName: 'activity',
  }
);

module.exports = Activities;
