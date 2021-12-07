const User = require('./User');
const Music = require('./Music');
const Activities = require('./activities');
const Decorations = require('./decoration');
const Food = require('./food');
const Party = require('./Party');
const Drinks = require('./drink'); 

User.hasMany(Party, {
    foreignKey: 'party_id',
    onDelete: 'CASCADE',
})

Party.hasMany(Food, {
    foreignKey: 'party_id',
    onDelete: 'CASCADE',
})

Party.hasMany(Music, {
    foreignKey: 'party_id',
    onDelete: 'CASCADE',
})

Party.hasMany(Activities, {
    foreignKey: 'party_id',
    onDelete: 'CASCADE',
})

Party.hasMany(Decorations, {
    foreignKey: 'party_id',
    onDelete: 'CASCADE',
})

Party.hasMany(Drinks, {
    foreignKey: 'party_id',
    onDelete: 'CASCADE',
})


//do the smae for the rest of the party details

Food.belongsToMany(Party, {
    foreignKey: 'party_id',
    onDelete: 'CASCADE',
})

Decorations.belongsToMany(Party, {
    foreignKey: 'party_id',
    onDelete: 'CASCADE',
})

Music.belongsToMany(Party, {
    foreignKey: 'party_id',
    onDelete: 'CASCADE',
})

Drinks.belongsToMany(Party, {
    foreignKey: 'party_id',
    onDelete: 'CASCADE',
})

Activities.belongsToMany(Party, {
    foreignKey: 'party_id',
    onDelete: 'CASCADE',
})





module.exports = { User, Music, Food, Drinks, Activities, Decorations, Party };

//add primary keys to the tables
