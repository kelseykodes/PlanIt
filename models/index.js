const User = require('./User');
const Party = require('./Party');

// one to many relationship
User.hasMany(Party, {
    foreignKey: 'user_id',
})

Party.belongsTo(User, {
    foreignKey: 'user_id',
})

module.exports = { User, Party };
