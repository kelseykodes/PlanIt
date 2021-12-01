const router = require('express').Router();
const { Activities } = require('../models');

// GET all galleries for homepage
router.get('/', async (req, res) => {
  try {
    const dbActivitiesData = await Activities.findAll({
      include: [
        {
          model: Activities,
          attributes: ['filename', 'description'],
        },
      ],
    });

    const galleries = dbActivitiesData.map((activities) =>
      activities.get({ plain: true })
    );

    res.render('homepage', {
      galleries,
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one activities
router.get('/activities/:id', async (req, res) => {
  try {
    const dbActivitiesData = await Activities.findByPk(req.params.id, {
      include: [
        {
          model: Painting,
          attributes: [
            'id',
            'title',
            'artist',
            'exhibition_date',
            'filename',
            'description',
          ],
        },
      ],
    });

    const activities = dbActivitiesData.get({ plain: true });
    res.render('activities', { activities });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// GET one painting
router.get('/painting/:id', async (req, res) => {
  try {
    const dbPaintingData = await Painting.findByPk(req.params.id);

    const painting = dbPaintingData.get({ plain: true });

    res.render('painting', { painting });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
