import { Document, Model, model, Schema } from "mongoose";


export interface Ibrand extends Document {
    name: string;
    logo: string;
    email: string;
    password: string;
    address: string;
    contact: string;
    contactPerson: string
    regID: string;
    regImage: string;
    taxID: string;
    taxImage: string;
    smsApiKey: string;
    senderID: string;
    smtpIntegration: object;
    sendName: string
    isActive: boolean
    isDeleted: boolean
    loginType: string;


}

const brandSchema: Schema = new Schema({
    name: {
        type: String,
        required: true
    },
    loginType: {
        type: String,
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    logo: {
        type: String,
    },
    contact: {
        type: String,
    },
    contactPerson: {
        type: String,
    },
    address: {
        type: String,
    },
    regID: {
        type: String,
    },
    regImage: {
        type: String,
    },
    taxID: {
        type: String,
    },
    taxImage: {
        type: String,
    },
    smtpIntegration: {
        type: Object,
    },
    smsApiKey: {
        type: String,
    },
    senderID: {
        type: String,
    },
    sendName: {
        type: String,
    },
    isActive: {
        type: Boolean,
    },
    isDeleted: {
        type: Boolean,
    },
    branches:[
        {
            type: Schema.Types.ObjectId,
            ref: "Branch"
          }
    ],
    admins:[
        {
            type: Schema.Types.ObjectId,
            ref: "Admin"
          }
    ],
    adminsRoles:[
        {
            type: Schema.Types.ObjectId,
            ref: "AdminsRole"
        }
    ],
    packageWallet:{
        smsCount:{
            type: Schema.Types.Number
        },
        emailCount:{
            type: Schema.Types.Number
        },
        notificationCount:{
            type: Schema.Types.Number
        },

    },
    packages:[{
        type: Schema.Types.ObjectId,
        ref: "Package"
    }]
})

const Brand: Model<Ibrand> = model("Brand", brandSchema);

export default Brand;
