"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const brandSchema = new mongoose_1.Schema({
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
    branches: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Branch"
        }
    ],
    admins: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "Admin"
        }
    ],
    adminsRoles: [
        {
            type: mongoose_1.Schema.Types.ObjectId,
            ref: "AdminsRole"
        }
    ],
    packageWallet: {
        smsCount: {
            type: mongoose_1.Schema.Types.Number
        },
        emailCount: {
            type: mongoose_1.Schema.Types.Number
        },
        notificationCount: {
            type: mongoose_1.Schema.Types.Number
        }
    }
});
const Brand = mongoose_1.model("Brand", brandSchema);
exports.default = Brand;
//# sourceMappingURL=brand.js.map