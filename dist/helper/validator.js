"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ValidatePackage = exports.ValidateBrand = void 0;
const joi_1 = __importDefault(require("joi"));
const brandSchema = joi_1.default.object({
    name: joi_1.default.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
    password: joi_1.default.string()
        .pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    email: joi_1.default.string()
        .email({ minDomainSegments: 2 }),
});
function ValidateBrand(brand) {
    return brandSchema.validate(brand);
}
exports.ValidateBrand = ValidateBrand;
const packageScema = joi_1.default.object({
    email: joi_1.default.string()
        .email({ minDomainSegments: 2 }),
    sms: joi_1.default.string()
        .min(3)
        .max(30),
    notification: joi_1.default.string()
        .min(3)
        .max(30),
    name: joi_1.default.string()
        .alphanum()
        .min(3)
        .max(30),
    expireTime: joi_1.default.number(),
    currency: joi_1.default.string(),
    createdAt: joi_1.default.boolean(),
    updatedAt: joi_1.default.boolean(),
    price: joi_1.default.number()
        .min(1)
});
function ValidatePackage(p) {
    return packageScema.validate(p);
}
exports.ValidatePackage = ValidatePackage;
//# sourceMappingURL=validator.js.map