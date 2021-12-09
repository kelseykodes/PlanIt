const User = require('./User');
const Music = require('./Music');
const Activities = require('./Activities');
const Decorations = require('./Decoration');
const Food = require('./Food');
const Party = require('./Party');
const Drinks = require('./Drink'); 
const Decoration = require('./Decoration');

User.hasMany(Party, {
    foreignKey: 'user_id',
})

Party.belongsTo(User, {
    foreignKey: 'user_id',
})

// Party.hasMany(Food, {
//     foreignKey: 'party_id'
// })

// Party.hasMany(Music, {
//     foreignKey: 'party_id',
// })

// Party.hasMany(Activities, {
//     foreignKey: 'party_id',
// })

// Party.hasMany(Decoration, {
//     foreignKey: 'party_id',
// })

// Party.hasMany(Drink, {
//     foreignKey: 'party_id',
// })


Party.belongsToMany(Food, { through: 'PartyFood', foreignKey: 'party_id' });
Food.belongsToMany(Party, { through: 'PartyFood', foreginKey: 'food_id' });

Party.belongsToMany(Food, { through: 'PartyFood', foreignKey: 'party_id' });
Decoration.belongsToMany(Party, { through: 'PartyDecoration', foreginKey: 'decoration_id' });

Party.belongsToMany(Food, { through: 'PartyFood', foreignKey: 'party_id' });
Activities.belongsToMany(Party, { through: 'PartyActivities', foreginKey: 'activities_id' });

Party.belongsToMany(Food, { through: 'PartyFood', foreignKey: 'party_id' });
Drink.belongsToMany(Party, { through: 'PartyDrink', foreginKey: 'drink_id' });

Party.belongsToMany(Food, { through: 'PartyFood', foreignKey: 'party_id' });
Music.belongsToMany(Party, { through: 'PartyMusic', foreginKey: 'music_id' });


module.exports = { User, Music, Food, Drinks, Activities, Decorations, Party };


