import { Request, Response } from 'express';

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
            res.status(200).send(data);
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
}