const User = require('./User');
const Music = require('./Music');
const Activities = require('./activities');
const Decorations = require('./decoration');
const Food = require('./food');
const Party = require('./Party');
const Drinks = require('./drink'); 

User.hasMany(Party, {
    include{

    }
})

Party.hasMany(Food, {

})

Party.hasMany(Music, {

})

Party.hasMany(Activities, {

})

Party.hasMany(Decorations, {

})

Party.hasMany(Drinks, {

})


//do the smae for the rest of the party details

Food.belongsToMany(Party, {

})

Decorations.belongsToMany(Party, {

})

Music.belongsToMany(Party, {

})

Drinks.belongsToMany(Party, {

})

Activities.belongsToMany(Party, {

})





module.exports = { User, Music, Food, Drinks, Activities, Decorations, Party };

//add primary keys to the tables
