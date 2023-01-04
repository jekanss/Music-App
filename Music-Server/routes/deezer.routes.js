const { Router } = require('express');
const { getCharts, getPlaylist, search } = require('../controllers/deezer.controller');

const router = Router();

router.get('/charts', [    
], getCharts  );

router.get('/playlist/:idPlaylist', [    
], getPlaylist );

router.get('/search/:query', [    
], search );


module.exports = router