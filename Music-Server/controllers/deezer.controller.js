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

module.exports = {
    getCharts
}
