import { Document, Model, model, Schema } from "mongoose";
import {Ibrand} from "./brand"
export interface Ibranch extends Document {
    brandId: Ibrand['_id'];
    name: string;
    startDate: string;
    interval: number;
    renewalDate: string;
    price: number;
    currency: string;
    allowedServices: string;
    flashStartUsername: string;
    flashStartPass: string;
    notificationEmail: string;
    type: string;
    nasName: string;
    isActive: boolean
    isDeleted: boolean

}

const branchSchema: Schema = new Schema({
    brand: {
        type: Schema.Types.ObjectId,
        ref: "Brand"
    },
    name: {
        type: String,
    },
    startDate: {
        type: Date,
    },
    renewalDate: {
        type: Date
    },
    interval: {
        type: Number
    },
    flashStartUsername: {
        type: String,
    },
    notificationEmail: {
        type: String,
    },
    flashStartPass: {
        type: String,
    },
    type: {
        type: String,
    },
    nasName: {
        type: String,
    },
    price: {
        type: Number
    },
    currency: {
        type: String,
    },
    allowedServices: {
        type: String,
    },
    isActive: {
        type: Boolean,
        default: true
    },
    isDeleted: {
        type: Boolean,
        default: false
    }
})

const Branch: Model<Ibranch> = model("Branch", branchSchema);

export default Branch;