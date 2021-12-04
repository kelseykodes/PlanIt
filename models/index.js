const User = require('./User');
const Theme = require('./Theme');
const MusicList = require('./MusicList');
const Music = require('./Music');

Theme.hasOne(MusicList,{
    foreignKey: 'theme_id'
})
MusicList.belongsTo(Theme,{
    foreignKey:'theme_id'
})

MusicList.hasMany(Music, {
    foreignKey: 'music_list_id',
});

Music.belongsTo(MusicList, {
    foreignKey: 'music_list_id',
});

module.exports = { User, Theme, MusicList, Music };