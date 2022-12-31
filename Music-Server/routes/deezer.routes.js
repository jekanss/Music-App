const { Router } = require('express');
const { getCharts, getPlaylist } = require('../controllers/deezer.controller');

const router = Router();

router.get('/charts', [    
], getCharts  );

router.get('/playlist/:idPlaylist', [    
], getPlaylist );


module.exports = router