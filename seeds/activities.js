const { Activities } = require('../models');

const activitiesdata = [
  {
    type: 'Game',
    name: 'Uno',
    description_of_activities: 'This is a card game.',
    num_Participants: '2-10',
    duration: 150,
  },
  {
    type: 'Game',
    name: 'Monopoly',
    description_of_activities: 'This is a board game.',
    num_Participants: '2-8',
    duration: 180
  },
  {
    type: 'Game',
    name: 'Super Smash Bros.',
    description_of_activities: 'This is a video game.',
    num_Participants: '2-4',
    duration: 20
  },
  {
    type: 'Movies',
    name: 'Sinister',
    description_of_activities: 'This is a Horror Movie.',
    num_Participants: 'As many as possible',
    duration: 109
  },
  {
    type: 'Movies',
    name: 'Red Notice',
    description_of_activities: 'This is a Action/Comedy Movie.',
    num_Participants: 'As many as possible',
    duration: 115
  },
  {
    type: 'Movies',
    name: 'UP',
    description_of_activities: 'This is a Family Movie.',
    num_Participants: 'As many as possible',
    duration: 96
  },
  {
    type: 'Other Activities',
    name: 'Painting',
    description_of_activities: 'This is activity requires active participation with paint, canvases, etc..',
    num_Participants: 'As many as possible',
    duration: 120
  },
  {
    type: 'Other Activities',
    name: 'Wine Tasting',
    description_of_activities: 'This is for adults.',
    num_Participants: 'As many as possible',
    duration: 120
  },
  {
    type: 'Other Activities',
    name: 'Dancing',
    description_of_activities: 'This is for the whole family. Pick your music and start!',
    num_Participants: 'As many as possible',
    duration: 60
  }
];

const seedActivities = () => Activities.bulkCreate(activitiesdata);

module.exports = seedActivities;
