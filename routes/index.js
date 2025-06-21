const express = require('express');
const router = express.Router();

const restakersRouter = require('./restakers');
const validatorsRouter = require('./validators');
const rewardsRouter = require('./rewards');

// Mount specific routers
router.use('/restakers', restakersRouter);
router.use('/validators', validatorsRouter);
router.use('/rewards', rewardsRouter);

module.exports = router;