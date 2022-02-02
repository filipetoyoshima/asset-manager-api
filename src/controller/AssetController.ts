import { Request, Response } from 'express';
import Asset, { IAsset } from '../model/Asset';
import { crudClass } from '../blueprint';

const AssetCrud = new crudClass<IAsset>(Asset);

export const createAsset = (
    req: Request,
    res: Response
):Promise<void> => AssetCrud.create(req, res);

export const findAsset = (
    req: Request,
    res: Response
):Promise<void> => AssetCrud.readOne(req, res);

export const findAssets = (
    req: Request,
    res: Response
):Promise<void> => AssetCrud.read(req, res);

export const updateAsset = (
    req: Request,
    res: Response
):Promise<void> => AssetCrud.update(req, res);

export const deleteAsset = (
    req: Request,
    res: Response
):Promise<void> => AssetCrud.delete(req, res);