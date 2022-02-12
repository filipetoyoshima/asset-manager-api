import { Schema, model, Document } from "mongoose";
import Unit from "../model/Unit";
import Person from "../model/Person";

export interface ICompany extends Document {
    name: string;
    description?: string;
}

const CompanySchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
});

CompanySchema.pre(/delete/, { document: false, query: true}, async function () {
    const companies = await this.model.find(this.getQuery()).exec();
    await Promise.all(companies.map(async (company) => {
        await Unit.deleteMany({ company: company._id });
        await Person.deleteMany({ company: company._id });
    }));
});

export default model<ICompany>("Company", CompanySchema);