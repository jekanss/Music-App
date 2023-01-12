const { Router } = require('express');
const { getCharts, getPlaylist, search, getArtistSongs, getAlbumSongs } = require('../controllers/deezer.controller');

const router = Router();

router.get('/charts', [    
], getCharts  );

router.get('/playlist/:idPlaylist', [    
], getPlaylist );

router.get('/artistSongs/:idArtist', [    
], getArtistSongs );

router.get('/album/:idAlbum', [    
], getAlbumSongs );

router.get('/search/:query', [    
], search );


module.exports = router