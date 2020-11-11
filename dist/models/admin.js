"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const adminSchema = new mongoose_1.Schema({
    brand: {
        type: mongoose_1.Schema.Types.ObjectId,
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
                type: mongoose_1.Schema.Types.ObjectId,
                ref: "Branch"
            },
            allowdServices: {
                type: String,
            }
        }
    ]
});
const Admin = mongoose_1.model("Admin", adminSchema);
exports.default = Admin;
//# sourceMappingURL=admin.js.map