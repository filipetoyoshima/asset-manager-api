import express from 'express';
import { connect } from 'mongoose';
import router from './src/routes';
import dbConfig from './src/database/index';
import dbSeed from './src/database/seed';
import cors from 'cors';

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
        this.express.use(cors());
        this.setDatabase();
        this.setRoutes();

        this.express.listen(3001, () => {
            console.log('App listening on port 3001!');
        });
    }

    setDatabase() {
        connect(dbConfig.uri)
            .then(() => {
                console.log('Database connected');
                if (process.argv.includes('seed')) {
                    console.log('Seeding database');
                    dbSeed()
                        .then(() => {
                            process.exit(0);
                        })
                        .catch(err => {
                            console.log(err);
                            process.exit(1);
                        })
                }
            });
    }

    setRoutes() {
        this.express.use(router);
    }
}

export default new App().express;