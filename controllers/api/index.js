
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const partyRoutes = require('./partyRoutes');

router.use('/users', userRoutes);
router.use('/parties', partyRoutes);

module.exports = router;
