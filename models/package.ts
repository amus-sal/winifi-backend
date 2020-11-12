import { number } from "joi";
import { Document, Model, model, Schema } from "mongoose";
import { type } from "os";


export interface Ipackage extends Document {
    smsCount: number;
    notificationCount: number;
    emailCount: number;
    name: string;
    expireTime: number;
    price: number
    currency: string;
    createdAt : Date;
    updatedAt : Date;


}

const packageScema: Schema = new Schema({
  smsCount: {
        type: Number,
        required: true
    },
    notificationCount: {
        type: Number,
        required: true
    },
    emailCount: {
        type: Number,
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
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now

    }
});

const Package: Model<Ipackage> = model("Package", packageScema);

export default Package;
