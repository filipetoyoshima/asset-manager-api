import express from 'express';
import { createAsset, readAsset, readOneAsset } from './controller/AssetController';

const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
    res.send('Now on Router')
})

router.post('/asset', createAsset);
router.get('/assets', readAsset);
router.get('/asset/:id', readOneAsset);


export default router;