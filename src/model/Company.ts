import { Schema, model, Document } from "mongoose";
import Unit from "../model/Unit";
import Person from "../model/Person";

export interface ICompany extends Document {
    name: string;
    description?: string;
    units: Array<Schema.Types.ObjectId>;
    people: Array<Schema.Types.ObjectId>;
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
    units: [{
        type: Schema.Types.ObjectId,
        ref: "Unit",
        required: true,
    }],
    persons: [{
        type: Schema.Types.ObjectId,
        ref: "Person",
        required: true,
    }]
});

CompanySchema.pre(/delete/, { document: false, query: true}, async function () {
    console.log("pre delete company");
    Unit.deleteMany({ company: this.getQuery()._id });
    Person.deleteMany({ company: this.getQuery()._id });
});

export default model<ICompany>("Company", CompanySchema);