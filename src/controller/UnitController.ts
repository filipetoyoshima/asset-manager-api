import { Request, Response } from 'express';
import Unit, { IUnit } from '../model/Unit';
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