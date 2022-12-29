
const express = require('express')
const cors = require('cors');
const bodyParser = require('body-parser');

class Server {

    constructor(){
        this.app = express();
        this.port = process.env.PORT;        
    

        //Middlewares
        this.middlewares();

        // Rutas de mi aplicación
        this.routes()
    }

    async conectarDB(){

        await dbConnection();

    }

    middlewares(){

        //cors
        this.app.use( cors() );

        // Parseo y lectura de body's
        this.app.use( express.json() );

        //Servir la carpeta publica
        this.app.use( express.static('public') );

        //Poder leer x-www-form-urlencoded y raw JSON
        this.app.use(bodyParser.json()); // support json encoded bodies
        this.app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies        

    }

    routes(){

        this.app.use( '/api/deezer', require('../routes/deezer.routes') );    

    }

    listen(){
        this.app.listen( this.port , () => {
            console.log(`Servidor corriendo en el puerto ${this.port}`);
        });
    }
}

module.exports =  Server;