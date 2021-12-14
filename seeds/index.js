const sequelize = require('../config/connection');
const Party = require('../models/Party');
const User = require('../models/User');


const userData = require('./userData.json');
const partyData = require('./partyData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const users = await User.bulkCreate(userData, {
    individualHooks: true,
    returning: true,
  });

  for (const list of partyData) {
    await Party.create({
      ...list,
      user_id: users[Math.floor(Math.random() * users.length)].id,
    });
  }

  process.exit(0);
};

seedDatabase();
