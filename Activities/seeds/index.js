const sequelize = require('../config/connection');
const seedActivities = require('./activitiesData');
const seedMusic = require('./Music');
const seedMusicList = require('./MusicList');
const seedTheme = require('./Theme');
const seedDecoration = require('./decoration');
const seedFood = require('./food');
const seedDrink = require('./drink');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedActivities();
  console.log('\n----- Activities SEEDED -----\n');

  await seedTheme();
  console.log('\n----- THEME SEEDED -----\n');

  await seedMusicList();
  console.log('\n----- MUSICLIST SEEDED -----\n');
  
  await seedMusic();
  console.log('\n----- MUSIC SEEDED -----\n');

  await seedDecoration();
  console.log('\n----- DECORATION SEEDED -----\n');

  await seedFood();
  console.log('\n----- FOOD SEEDED -----\n');

  await seedDrink();
  console.log('\n----- DRINK SEEDED -----\n');

  process.exit(0);
};

seedAll();
