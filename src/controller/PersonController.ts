import { Request, Response } from 'express';
import Person, { IPerson } from '../model/Person';
import { crudClass } from '../blueprint';

const PersonCrud = new crudClass<IPerson>(Person);

export const createPerson = ( //todo: crypto password
    req: Request,
    res: Response
):Promise<void> => PersonCrud.create(req, res);

export const findPerson = (
    req: Request,
    res: Response
):Promise<void> => PersonCrud.readOne(req, res);

export const findPeople = (
    req: Request,
    res: Response
):Promise<void> => PersonCrud.read(req, res);

export const updatePerson = (
    req: Request,
    res: Response
):Promise<void> => PersonCrud.update(req, res);

export const deletePerson = (
    req: Request,
    res: Response
):Promise<void> => PersonCrud.delete(req, res);