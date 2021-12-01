const sequelize = require('../config/connection');
const Food = require('../models/Food');
const Drink = require('../models/Drinks');
const foodData = require('./food-seeds.json');
const drinkData = require('./drinks-seeds.json');



const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await Food.bulkCreate(foodData, {
    individualHooks: true,
    returning: true,
  });
  await Drink.bulkCreate(drinkData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
