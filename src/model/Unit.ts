import { Schema, model, Document } from "mongoose";

export interface IUnit extends Document {
    name: string;
    description?: string;
    model: string;
    assets: Array<Schema.Types.ObjectId>;
    company: Schema.Types.ObjectId;
}

const UnitSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    assets: [{
        type: Schema.Types.ObjectId,
        ref: "Asset",
        required: true,
    }],
    company: {
        type: Schema.Types.ObjectId,
        ref: "Company",
        required: true,
    }
});

export default model<IUnit>("Unit", UnitSchema);