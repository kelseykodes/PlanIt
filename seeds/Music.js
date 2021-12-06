const { Music } = require('../models');
const musicData = [
  {
    music_name: 'All I Wang For Christmas Is You',
    singer: 'Mariah Carey',
    theme: 'Christmas'
  },
  {
    music_name: 'Last Christmas',
    singer: 'Wham!',
    theme: 'Christmas'
  },
  {
    music_name: 'Let It Snow',
    singer: 'Frank Sinatra',
    theme: 'Christmas'
  },
  {
    music_name: 'Like Its Christmas',
    singer: 'Jonas Brothers',
    theme: 'Christmas'
  },
  {
    music_name: 'Mistletoe',
    singer: 'Justin Bieber',
    theme: 'Christmas'
  },
  {
    music_name: 'Run Rudolph Run',
    singer: 'Chuck Berry',
    theme: 'Christmas'
  },
  {
    music_name: 'Santa Tell Me',
    singer: 'Ariana Grande',
    theme: 'Christmas'
  },
  {
    music_name: 'Happy Birthday To You (English ver.)',
    singer: 'No Name',
    theme: 'Birthday'
  },
  {
    music_name: 'Peaches ft. Daniel Caesar, Giveon',
    singer: 'Justin Bieber',
    theme: 'NightClub'
  },
  {
    music_name: 'Imagine',
    singer: 'Ariana Grande',
    theme: 'NightClub'
  },
];

const seedMusic = () => Music.bulkCreate(musicData);

module.exports = seedMusic;
