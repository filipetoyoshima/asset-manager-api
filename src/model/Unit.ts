import { Schema, model, Document } from "mongoose";
import Asset from "../model/Asset";

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
        required: false,
    }
});

UnitSchema.pre(/delete/, { document: false, query: true}, async function () {
    const units = await this.model.find(this.getQuery()).exec();
    await Promise.all(units.map(async (unit) => {
        await Asset.deleteMany({ unit: unit._id });
    }));
});

export default model<IUnit>("Unit", UnitSchema);