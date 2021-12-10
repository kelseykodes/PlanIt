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

// GET route takes user to party dashboard once log in is authenticated

// need to pass all the parties here
router.get('/dashboard', withAuth, async (req, res) => {
  try {
    // Find the logged in user based on the session ID
    const userData = await User.findByPk(req.session.user_id, {
      attributes: { exclude: ['password'] },
      // include: [{ model: Party }],
    });

    const user = userData.get({ plain: true });
    res.render('dashboard', {
      ...user,
      logged_in: true
    }); 
  } catch (err) {
    res.status(500).json(err);
  }
});


// router.get('/party-form', async (req, res) => {
//   try {
//     const foodData = await Food.findAll();
//     const drinkData = await Drink.findAll();
//     const foodItems = foodData.map((project) => project.get({ plain: true }));
//     const drinkItems = drinkData.map((project) => project.get({ plain: true }));
//     // Pass serialized data and session flag into template
//     res.render('party-form', {
//       foodItems, drinkItems, logged_in: req.isAuthenticated()
//     });
//   } catch (err) {
//     res.status(500).json(err);
//     console.log(err);
//   }
// });


// GET route takes user to party form when logged in
//  need to make it as /party-form/:id
router.get('/party-form', async (req, res) => {
  try {
    // Pass serialized data and session flag into template
    res.render('party-form', {logged_in: true});
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