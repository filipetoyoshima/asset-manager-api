import express from 'express';
import { controlTest } from './controller/controltest';

const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
    res.send('Now on Router')
})

router.post('/twice', controlTest);

export default router;