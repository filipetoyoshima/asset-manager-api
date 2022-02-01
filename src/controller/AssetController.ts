import { Request, Response } from 'express';
import Asset, { IAsset } from '../model/Asset';
import { crudClass } from '../blueprint';

const AssetCrud = new crudClass<IAsset>(Asset);

export const createAsset = (
    req: Request,
    res: Response
):Promise<void> => AssetCrud.create(req, res);