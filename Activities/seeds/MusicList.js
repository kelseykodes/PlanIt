const { MusicList } = require('../models');

const musicListData = [
  {
    musicList_name: 'My Plain Music',
    theme_id: 1
  },
  {
    musicList_name: 'My Christmas Music',
    theme_id: 2
  }
];

const seedMusicList = () => MusicList.bulkCreate(musicListData);

module.exports = seedMusicList;
