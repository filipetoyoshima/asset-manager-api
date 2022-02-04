import express from 'express';
import { connect } from 'mongoose';
import router from './src/routes';
import dbConfig from './src/database/index';

interface App {
    express: express.Application;
}

declare module "express" {
    export interface Request {
        user?: string;
    }
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
        connect(dbConfig.uri);
    }

    setRoutes() {
        this.express.use(router);
    }
}

export default new App().express;