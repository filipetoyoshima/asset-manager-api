import express from 'express';
import mongoose from 'mongoose';
import dbConfig from './src/database/index';

interface App {
    express: express.Application;
}

class App {
    constructor() {
        this.express = express();
        console.log(typeof this.express);
        this.database();


        this.express.get('/', (req:express.Request, res:express.Response) => {
            res.send('Hello World!');
        });

        this.express.listen(3000, () => {
            console.log('Example app listening on port 3000!');
        });
    }

    database() {
        mongoose.connect('mongodb://root:rootpassword@localhost:27017');
    }
}

export default new App().express;