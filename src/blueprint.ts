import { Request, Response } from 'express';

export class crudClass<T> {
    constructor (
        public model: any,
    ) {
        this.model = model;
        console.log('this model -> ', this.model);
        this.create.bind(this);
    }

    public async create(
        req: Request<{}, {}, T>,
        res: Response
    ): Promise<void> {
        console.log('model -> ', this.model);
        const data = await this.model.create(req.body);
        res.status(201).send(data);
    }
}