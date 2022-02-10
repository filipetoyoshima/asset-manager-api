import { Schema, model, Document } from "mongoose";

export interface IPerson extends Document {
    name: string;
    email: string;
    password: string;
}

const PersonSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Please fill a valid email address'
        ],
        unique: true,
    },
    password: {
        type: String,
        required: true,
        select: false,
    },
    company: {
        type: Schema.Types.ObjectId,
        ref: "Company",
        required: true,
    },
});

export default module.exports = model<IPerson>("Person", PersonSchema);