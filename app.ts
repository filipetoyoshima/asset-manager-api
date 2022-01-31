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
        this.express.use(express.json());
        this.setDatabase();
        this.setRoutes();

        this.express.listen(3000, () => {
            console.log('Example app listening on port 3000!');
        });
    }

    setDatabase() {
        mongoose.connect(dbConfig.uri);
    }

    setRoutes() {
        this.express.use(router);
    }
}

export default new App().express;