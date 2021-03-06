const router = require('express').Router();
const { Party } = require('../../models');
const withAuth = require('../../utils/auth');

router.post('/', withAuth, async (req, res) => {
    try {
      const newParty = await Party.create({
        ...req.body,
        user_id: req.session.user_id,
      });
      res.status(200).json(newParty);
    } catch (err) {
      res.status(400).json(err);
    }
  });
  
  router.delete('/:id', withAuth, async (req, res) => {
    try {
      const partyData = await Party.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
      if (!partyData) {
        res.status(404).json({ message: 'No party found with this id!' });
        return;
      }
  
      res.status(200).json(partyData);
    } catch (err) {
      res.status(500).json(err);
    }
});
  
//Reference Button 
router.get('/:id', withAuth, async (req, res) => {
  const partyId= req.params.id;
  const result =  await Party.findOne({
    where: {
      id: partyId,
    },
  });
  console.log(result)
  const parties = result.map((party)=> party.get({plain: true}));
  res.render('party-form', parties);

});
module.exports = router;
  