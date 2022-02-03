import { Request, Response } from 'express';
import Person, { IPerson } from '../model/Person';
import { crudClass } from '../blueprint';
import bcrypt from 'bcrypt';

const PersonCrud = new crudClass<IPerson>(Person);

export const createPerson = (
    req: Request<{}, {}, IPerson>,
    res: Response
):Promise<void> => {
    req.body.password = bcrypt.hashSync(req.body.password, 10);
    return PersonCrud.create(req, res);
};

export const findPerson = (
    req: Request,
    res: Response
):Promise<void> => PersonCrud.readOne(req, res);

export const findPeople = (
    req: Request,
    res: Response
):Promise<void> => PersonCrud.read(req, res);

export const updatePerson = (
    req: Request<{}, {}, Partial<IPerson>>,
    res: Response
):Promise<void> => {
    if (req.body.password) {
        res.status(400).send('Password cannot be updated');
        return Promise.resolve();
    }
    return PersonCrud.update(req, res);
};

export const deletePerson = (
    req: Request,
    res: Response
):Promise<void> => PersonCrud.delete(req, res);