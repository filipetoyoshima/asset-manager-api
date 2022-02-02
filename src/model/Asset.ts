import { Schema, model, Document, SchemaTypeOptions } from "mongoose";

export interface IAsset extends Document {
    name: string;
    description?: string;
    model: string;
    status: string;
    healthLevel: number;
    owner: string;
}

const AssetSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    model: {
        type: String,
        required: true,
    },
    status: {
        type: String,
        enum: {
            values: ["running", "alerting", "stopped"],
            message: "enum validator failed for path `{PATH}` with value `{VALUE}`\
            \n`{VALUE}` is not one of [`running`, `alerting`, `stopped`]",
        },
        required: true,
    },
    healthLevel: {
        type: Number,
        required: true,
        min: [0, "Health level cannot be less than 0"],
        max: [100, "Health level cannot be more than 100"],
    },
    owner: {
        type: Schema.Types.ObjectId,
        ref: "Person",
        required: true,
    }
});

export default model<IAsset>("Asset", AssetSchema);