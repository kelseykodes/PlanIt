const User = require('./User');
const Music = require('./Music');
const Activities = require('./Activities');
const Decoration = require('./Decoration');
const Food = require('./Food');
const Party = require('./Party');
const Drink = require('./Drink'); 
const PartyActivities = require('./PartyActivities');
const PartyDecoration = require('./PartyDecoration');
const PartyDrink = require('./PartyDrink');
const PartyFood = require('./PartyActivities');
const PartyMusic = require('./PartyMusic');


User.hasMany(Party, {
    foreignKey: 'user_id',
})

Party.belongsTo(User, {
    foreignKey: 'user_id',
})


Party.belongsToMany(Food, {
    through: 'PartyFood',
    foreignKey: 'party_id' 
});

Food.belongsToMany(Party, {
    through: 'PartyFood',
    foreginKey: 'food_id' 
});

Party.belongsToMany(Food, {
     through: 'PartyDecoration',
      foreignKey: 'party_id' 
    });

Decoration.belongsToMany(Party, {
     through: 'PartyDecoration',
      foreginKey: 'decoration_id'
     });

Party.belongsToMany(Food, {
     through: 'PartyActivities',
      foreignKey: 'party_id'
     });

Activities.belongsToMany(Party, {
     through: 'PartyActivities',
      foreginKey: 'activities_id' 
    });

Party.belongsToMany(Food, { 
    through: 'PartyDrink',
     foreignKey: 'party_id' 
    });

Drink.belongsToMany(Party, {
     through: 'PartyDrink',
      foreginKey: 'drink_id' 
    });

Party.belongsToMany(Food, {
     through: 'PartyMusic',
      foreignKey: 'party_id'
     });

Music.belongsToMany(Party, {
     through: 'PartyMusic',
      foreginKey: 'music_id'
     });


module.exports = { User, Music, Food, Drink, Activities, Decoration, Party, PartyFood, PartyActivities, PartyDecoration, PartyDrink, PartyMusic };


