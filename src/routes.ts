import express from 'express';
import { verifyJWT } from './services/auth';
import { createAsset, findAsset, findAssets, updateAsset, deleteAsset, getAssetImage } from './controller/AssetController';
import { createPerson, findPerson, findPeople, updatePerson, deletePerson, login, getMe } from './controller/PersonController';
import { createUnit, findUnit, findUnits, updateUnit, deleteUnit, getUnitAssets } from './controller/UnitController';
import { createCompany, findCompany, findCompanys, updateCompany, deleteCompany, getCompanyUnits } from './controller/CompanyController';

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
router.get('/asset/:id/image', verifyJWT, getAssetImage);
router.post('/asset', verifyJWT,createAsset);
router.put('/asset/:id', verifyJWT,updateAsset);
router.delete('/asset/:id', verifyJWT, deleteAsset);

// Unit
router.get('/units', verifyJWT, findUnits);
router.get('/unit/:id', verifyJWT, findUnit);
router.get('/unit/:id/assets', verifyJWT, getUnitAssets);
router.post('/unit', verifyJWT, createUnit);
router.put('/unit/:id', verifyJWT, updateUnit);
router.delete('/unit/:id', verifyJWT, deleteUnit);

// Company
router.get('/companies', verifyJWT, findCompanys);
router.get('/company/:id', verifyJWT, findCompany);
router.get('/company/:id/units', verifyJWT, getCompanyUnits);
router.post('/company', verifyJWT, createCompany);
router.put('/company/:id', verifyJWT, updateCompany);
router.delete('/company/:id', verifyJWT, deleteCompany);

export default router;