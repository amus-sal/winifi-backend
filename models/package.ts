import { Document, Model, model, Schema } from "mongoose";


export interface Ipackage extends Document {
    sms: string;
    notification: string;
    email: string;
    name: string;
    expireTime: number;
    price: number
    currency: string;
    createdAt : boolean;
    updatedAt : boolean;


}

const packageScema: Schema = new Schema({
    sms: {
        type: String,
        required: true
    },
    notification: {
        type: String,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    expireTime: {
        type: Number,
    },
    price: {
        type: Number,
        required: true
    },
    currency: {
        type: String,
        required: true
    },
    createdAt: {
        type: Boolean,
    },
    updatedAt: {
        type: Boolean,

    }
});

const Package: Model<Ipackage> = model("Package", packageScema);

export default Package;
