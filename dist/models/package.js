"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const packageScema = new mongoose_1.Schema({
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
const Package = mongoose_1.model("Package", packageScema);
exports.default = Package;
//# sourceMappingURL=package.js.map