import express from 'express';
import { verifyJWT } from './services/auth';
import { createAsset, findAsset, findAssets, updateAsset, deleteAsset } from './controller/AssetController';
import { createPerson, findPerson, findPeople, updatePerson, deletePerson, login, getMe } from './controller/PersonController';

const router = express.Router();

router.get('/', (req: express.Request, res: express.Response) => {
    res.send('Now on Router')
})

// Person
router.get('/person/:id', verifyJWT, findPerson);
router.get('/people', verifyJWT, findPeople);
router.get('/me', verifyJWT, getMe)
router.post('/login', login);
router.post('/person', createPerson);
router.put('/person/:id', verifyJWT, updatePerson);
router.delete('/person/:id', verifyJWT, deletePerson);

// Asset
router.get('/assets', verifyJWT, findAssets);
router.get('/asset/:id', verifyJWT,findAsset);
router.post('/asset', verifyJWT,createAsset);
router.put('/asset/:id', verifyJWT,updateAsset);
router.delete('/asset/:id', verifyJWT, deleteAsset);


export default router;