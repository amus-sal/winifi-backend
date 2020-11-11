import { Document, Model, model, Schema } from "mongoose";
import {Ibrand} from "./brand"
// import AdminRole from "./adminRole"

export interface Iadmin extends Document {
    brandId: Ibrand['_id'];
    email: string;
    password: string;
    phone: string;
    isAllowedExport: boolean;
    loginType: string;
    adminRoles: object;
}

const adminSchema: Schema = new Schema({
    brand: {
        type: Schema.Types.ObjectId,
        ref: "Brand"
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    },
    phone: {
        type: String,
    },
    loginType: {
        type: String,
    },
    adminRoles: [
         {
            branch: {
                type: Schema.Types.ObjectId,
                ref: "Branch"
            },
            allowdServices:{
                type: String,
            }
         }
    ]
})

const Admin: Model<Iadmin> = model("Admin", adminSchema);

export default Admin;
