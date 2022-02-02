import { Schema, model, Document } from "mongoose";

export interface IPerson extends Document {
    name: string;

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
        ]
    },
    password: {
        type: String,
        required: true,
        select: false,
    }
});

export default module.exports = model<IPerson>("Person", PersonSchema);