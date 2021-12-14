const router = require('express').Router();
const { Party, User } = require('../models');
const withAuth = require('../utils/auth');


router.get('/', (req, res) => {
  try {
    res.render('home-page', { 
      logged_in: req.session.logged_in 
    });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

router.get('/dashboard', withAuth, async (req, res) => {
  try {
    // console.log('Start fetch')
    const partyData = await Party.findAll();
    // console.log('Start parties');
    const parties = partyData.map((party)=> party.get({plain: true}));
    // console.log(parties);
    res.render('dashboard',{
      parties,
      logged_in: req.session.logged_in
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/party-form', async (req, res) => {
  try {
    // Pass serialized data and session flag into template
    res.render('party-form');
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

// If the user is already logged in, redirect the request to party dashboard
router.get('/login', (req, res) => {
  if (req.session.logged_in) {
    res.redirect('dashboard');
    return;
  }

  res.render('login');
});

module.exports = router; 