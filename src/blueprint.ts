import { Request, Response } from 'express';
import { ParamsDictionary } from 'express-serve-static-core';

export class crudClass<T> {
    constructor (
        public model: any,
    ) {
        this.model = model;
        this.create.bind(this);
    }

    public async create(
        req: Request<{}, {}, T>,
        res: Response
    ): Promise<void> {
        try {
            const data = await this.model.create(req.body);
            res.status(201).send(data);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    public async readOne(
        req: Request,
        res: Response
    ): Promise<void> {
        try {
            const id = req.params.id;
            const data = await this.model.findById(id);
            if (data !== null) {
                res.status(200).send(data);
            } else {
                res.status(404).send('Not Found');
            }   
        } catch (error) {
            res.status(500).send(error);
        }
    }

    public async read(
        req: Request,
        res: Response
    ): Promise<void> {
        try {
            const data = await this.model.find();
            res.status(200).send(data);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    public async update(
        req: Request<ParamsDictionary, {}, Partial<T>>, // todo: type the params properly
        res: Response
    ): Promise<void> {
        try {
            const id = req.params.id;
            const data = await this.model.findByIdAndUpdate(id, req.body, { new: true });
            res.status(200).send(data);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    public async delete(
        req: Request,
        res: Response
    ): Promise<void> {
        try {
            const id = req.params.id;
            const data = await this.model.findByIdAndDelete(id);
            if (data !== null) {
                res.status(200).send(data);
            } else {
                res.status(404).send('Not found');
            }
        } catch (error) {
            res.status(500).send(error);
        }
    }
}