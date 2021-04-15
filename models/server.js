const express = require('express');
const cors = require('cors');

class Server {

    constructor() {
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/users';
        // Middlewares
        this.middlewares();

        this.routes();
    }

    middlewares() {
        
        //CORS
        this.app.use( cors() );

        // PARSEO DEL BODY
        this.app.use( express.json() );

        //Directorio publico
        this.app.use( express.static('public') );
    }

    routes() {
        
        this.app.use(this.usuariosPath, require('../routes/users'));

    }

    listen() {
        this.app.listen( this.port, () => {
            console.log('Servidor corriendo en el puerto ', this.port);
        });
    }
}

module.exports = Server;