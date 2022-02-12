import { Request, Response } from 'express';
import Unit, { IUnit } from '../model/Unit';
import Asset from '../model/Asset';
import { crudClass } from '../blueprint';

const UnitCrud = new crudClass<IUnit>(Unit);

export const createUnit = (
    req: Request,
    res: Response
):Promise<void> => UnitCrud.create(req, res);

export const findUnit = (
    req: Request,
    res: Response
):Promise<void> => UnitCrud.readOne(req, res);

export const findUnits = (
    req: Request,
    res: Response
):Promise<void> => UnitCrud.read(req, res);

export const updateUnit = (
    req: Request,
    res: Response
):Promise<void> => UnitCrud.update(req, res);

export const deleteUnit = (
    req: Request,
    res: Response
):Promise<void> => UnitCrud.delete(req, res);

export const getUnitAssets = async (
    req: Request,
    res: Response
):Promise<void> => {
    try {
        const unit = await Unit.findById(req.params.id).exec();
        if (!unit) {
            res.status(404).send('Unit not found');
            return;
        }
        const assets = await Asset.find({ unit: unit._id }).exec();
        res.send({unit, assets});
    } catch (e) {
        console.error(e);
        res.status(500).send('Unexpected error');
    }
}
