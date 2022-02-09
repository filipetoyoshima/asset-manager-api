import { Request, Response } from 'express';
import Company, { ICompany } from '../model/Company';
import { crudClass } from '../blueprint';

const CompanyCrud = new crudClass<ICompany>(Company);

export const createCompany = (
    req: Request,
    res: Response
):Promise<void> => CompanyCrud.create(req, res);

export const findCompany = (
    req: Request,
    res: Response
):Promise<void> => CompanyCrud.readOne(req, res);

export const findCompanys = (
    req: Request,
    res: Response
):Promise<void> => CompanyCrud.read(req, res);

export const updateCompany = (
    req: Request,
    res: Response
):Promise<void> => CompanyCrud.update(req, res);

export const deleteCompany = (
    req: Request,
    res: Response
):Promise<void> => CompanyCrud.delete(req, res);