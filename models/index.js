const User = require('./User');
const Music = require('./Music');
const Activites = require('./activities');
const Decorations = require('./decoration');
const Food = require('./food');
const Party = require('./Party');
const Drink = require('./drink'); 

User.hasMany(Party, {
    include{

    }
})

Party.hasMany(Food, {

})
//do the smae for the rest of the party details

Food.belongsToMany(Party, {

})

// Do the same for the rest fo the models




module.exports = { User, Music };

//add primary keys to the tables
