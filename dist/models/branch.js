"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const branchSchema = new mongoose_1.Schema({
    brand: {
        type: mongoose_1.Schema.Types.ObjectId,
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
});
const Branch = mongoose_1.model("Branch", branchSchema);
exports.default = Branch;
//# sourceMappingURL=branch.js.map