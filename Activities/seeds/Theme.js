const { Theme } = require('../models');

const themeData = [
  {
    theme_name: 'Plain',
  },
  {
    theme_name: 'Christmas',
  }
];

const seedTheme = () => Theme.bulkCreate(themeData);

module.exports = seedTheme;
