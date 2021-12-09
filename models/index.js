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
    through: 'partyfood',
    foreignKey: 'party_id' 
});

Food.belongsToMany(Party, {
    through: 'partyfood',
    foreginKey: 'food_id' 
});

Party.belongsToMany(Decoration, {
     through: 'partydecoration',
     foreignKey: 'party_id' 
    });

Decoration.belongsToMany(Party, {
     through: 'partydecoration',
     foreignKey: 'decoration_id'
     });

Party.belongsToMany(Activities, {
     through: 'partyactivities',
      foreignKey: 'party_id'
     });

Activities.belongsToMany(Party, {
     through: 'partyactivities',
     foreignKey: 'activities_id' 
    });

Party.belongsToMany(Drink, { 
    through: 'partydrink',
    foreignKey: 'party_id' 
    });

Drink.belongsToMany(Party, {
     through: 'partydrink',
     foreignKey: 'drink_id' 
    });

Party.belongsToMany(Music, {
     through: 'partymusic',
     foreignKey: 'party_id'
     });

Music.belongsToMany(Party, {
     through: 'partymusic',
     foreignKey: 'music_id'
     });


module.exports = { User, Music, Food, Drink, Activities, Decoration, Party, PartyFood, PartyActivities, PartyDecoration, PartyDrink, PartyMusic };


