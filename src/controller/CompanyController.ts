import { Request, Response } from 'express';
import Company, { ICompany } from '../model/Company';
import Unit from '../model/Unit';
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

export const getCompanyUnits = async (
    req: Request,
    res: Response
):Promise<void> => {
    try {
        const company = await Company.findById(req.params.id).exec();
        if (!company) {
            res.status(404).send('Company not found');
            return;
        }
        const units = await Unit.find({ company: company._id }).exec();
        res.send({company, units});
    } catch (e) {
        console.error(e);
        res.status(500).send('Unexpected error');
    }
}
