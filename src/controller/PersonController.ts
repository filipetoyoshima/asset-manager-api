import { Request, Response } from 'express';
import Person, { IPerson } from '../model/Person';
import { crudClass } from '../blueprint';
import bcrypt from 'bcrypt';
import { signJWT } from '../services/auth';

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

export const login = async (
    req: Request<{}, {}, {
        email: string;
        password: string;
    }>,
    res: Response
):Promise<void> => {
    try {
        const { email, password } = req.body;
        const person = await Person.findOne({ email }).select('+password');
        if (!person) {
            res.status(401).send('Invalid email');
            return;
        }
        const match = await bcrypt.compare(password, person.password);
        if (!match) {
            res.status(401).send('Invalid password');
            return;
        }
        const token = await signJWT({ id: person._id });
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).send(error);
    }
}

export const getMe = async (
    req: Request,
    res: Response
):Promise<void> => {
    try {
        const person = await Person.findById(req.user);
        res.status(200).json(person);
    } catch (error) {
        res.status(500).send(error);
    }
}