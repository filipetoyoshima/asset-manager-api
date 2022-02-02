import express from 'express';
import { createAsset, readAsset, readOneAsset, updateAsset, deleteAsset } from './controller/AssetController';
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
router.get('/assets', readAsset);
router.get('/asset/:id', readOneAsset);
router.put('/asset/:id', updateAsset);
router.delete('/asset/:id', deleteAsset);


export default router;