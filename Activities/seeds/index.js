const sequelize = require('../config/connection');
const seedActivities = require('./activitiesData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedActivities();

  await seedPaintings();

  process.exit(0);
};

seedAll();
