const { Router } = require('express');
const { getCharts } = require('../controllers/deezer.controller');

const router = Router();

router.get('/charts', [
    
], getCharts  );


module.exports = router