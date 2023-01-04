const { response, request } = require("express");
const fetch = require('node-fetch');

const getCharts = async (req = request, res = response) => {    
    
    try {
        
        const response = await fetch('https://api.deezer.com/chart');
        const charts = await response.json();  
     
        res.status(201).json({
            charts
        })

    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok:false,
            msg: error
        })
    }

}

const getPlaylist =  async (req = request, res = response) => {

    const idPlaylist = req.params.idPlaylist

    try {

        const response = await fetch(`https://api.deezer.com/playlist/${idPlaylist}`);
        const playlist = await response.json();  
     
        res.status(201).json({
            playlist
        })
        
    } catch (error) {
        console.log(error)
        res.status(500).json({
            ok:false,
            msg: error
        })
    }
}

const search = async ( req= request, res = response ) => {

    const query = req.params.query

    try {

        const response = await fetch(`https://api.deezer.com/search?q=${query}`);
        const result = await response.json();  
     
        res.status(201).json({
            result
        })

        
    } catch (error) {
        
    }
}

module.exports = {
    getCharts,
    getPlaylist,
    search
}
