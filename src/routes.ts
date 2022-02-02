import express from 'express';
import { createAsset, findAsset, findAssets, updateAsset, deleteAsset } from './controller/AssetController';
import { createPerson, findPerson, findPeople, updatePerson, deletePerson } from './controller/PersonController';

const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
    res.send('Now on Router')
})

// Person
router.post('/person', createPerson);
router.get('/person/:id', findPerson);
router.get('/people', findPeople);
router.put('/person/:id', updatePerson);
router.delete('/person/:id', deletePerson);

// Asset
router.post('/asset', createAsset);
router.get('/assets', findAssets);
router.get('/asset/:id', findAsset);
router.put('/asset/:id', updateAsset);
router.delete('/asset/:id', deleteAsset);


export default router;