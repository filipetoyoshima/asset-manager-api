import express from 'express';
import { CreateAsset } from './controller/AssetController';

const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
    res.send('Now on Router')
})

router.post('/asset', CreateAsset);

export default router;