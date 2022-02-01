import { Request, Response } from 'express';
import Asset, { IAsset } from '../model/Asset';

export const CreateAsset = async (
    req: Request<{}, {}, IAsset>,
    res: Response
): Promise<void> => {
    try {
        const data = await Asset.create(req.body);
        res.status(201).send(data);
    } catch(error) {
        res.status(500).send(error);
    }
}