import express from 'express';
import mongoose from 'mongoose';
import router from './src/routes';
import dbConfig from './src/database/index';

interface App {
    express: express.Application;
}

class App {
    constructor() {
        this.express = express();
        this.database();
        this.setRoutes();

        this.express.listen(3000, () => {
            console.log('Example app listening on port 3000!');
        });
    }

    database() {
        mongoose.connect('mongodb://root:rootpassword@localhost:27017');
    }

    setRoutes() {
        console.log('ROUTER => ', router);
        this.express.use(router);
    }
}

export default new App().express;