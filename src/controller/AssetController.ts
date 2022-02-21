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

export const getAssetImage = async (
    req: Request,
    res: Response
):Promise<void> => {
    try {
        const asset = await Asset.findById(req.params.id).select('+image').exec();
        if (!asset) {
            res.status(404).send('Asset not found');
            return;
        }
        const img = Buffer.from(asset.image.data, 'base64');
        res.writeHead(200, {
            'Content-Type': asset.image.contentType,
            'Content-Length': img.length
        })
        res.end(img);
    } catch (e) {
        console.error(e);
        res.status(500).send('Unexpected error');
    }
}