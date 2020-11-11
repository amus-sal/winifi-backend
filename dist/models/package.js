"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const packageScema = new mongoose_1.Schema({
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
const Package = mongoose_1.model("Package", packageScema);
exports.default = Package;
//# sourceMappingURL=package.js.map