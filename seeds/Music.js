const { Music } = require('../models');
const musicData = [
  {
    music_name: 'A Little Love',
    singer: 'Celeste',
    music_list_id: 2
  },
  {
    music_name: 'All I Wang For Christmas Is You',
    singer: 'Mariah Carey',
    music_list_id: 2
  },
  {
    music_name: 'Happy Xmas War is Over',
    singer: 'Celine Dion',
    music_list_id: 2
  },
  {
    music_name: 'Jingle Bell Rock',
    singer: 'Bobby Helms',
    music_list_id: 2
  },
  {
    music_name: 'Last Christmas',
    singer: 'Wham!',
    music_list_id: 2
  },
  {
    music_name: 'Let It Snow',
    singer: 'Frank Sinatra',
    music_list_id: 2
  },
  {
    music_name: 'Like Its Christmas',
    singer: 'Jonas Brothers',
    music_list_id: 2
  },
  {
    music_name: 'Mistletoe',
    singer: 'Justin Bieber',
    music_list_id: 2
  },
  {
    music_name: 'Rockin Around The Christmas Tree',
    singer: 'Brenda Lee',
    music_list_id: 2
  },
  {
    music_name: 'Run Rudolph Run',
    singer: 'Chuck Berry',
    music_list_id: 2
  },
  {
    music_name: 'Santa Tell Me',
    singer: 'Ariana Grande',
    music_list_id: 2
  },
  {
    music_name: 'You Make It Feel Like Christmas',
    singer: 'Gwen Stefani (ft. Blake Shelton)',
    music_list_id: 2
  },
];

const seedMusic = () => Music.bulkCreate(musicData);

module.exports = seedMusic;
