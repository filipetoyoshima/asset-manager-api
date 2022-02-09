import { Schema, model, Document } from "mongoose";

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

export default model<ICompany>("Company", CompanySchema);