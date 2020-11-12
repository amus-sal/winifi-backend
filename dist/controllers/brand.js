"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BrandController = void 0;
const brand_1 = __importDefault(require("../models/brand"));
const validator_1 = require("../helper/validator");
class BrandController {
    constructor() { }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // req.body.loginType = 'OWNER'
                let validation = validator_1.ValidateBrand(req.body);
                if (validation.error) {
                    res.json(validation.error);
                    res.status(402).json({ message: "Not Valid Data" });
                    return;
                }
                let brand = yield brand_1.default.create(req.body);
                res.json({ message: "The Brand is created successfully", id: brand._id });
            }
            catch (err) {
                res.status(502).json({ message: "Internal Server Error" });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let validation = validator_1.ValidateBrand(req.body);
                if (validation.error) {
                    res.status(402).json({ message: "Not Valid Data" });
                }
                let brand = yield brand_1.default.findByIdAndUpdate(req.params.id, {
                    $set: req.body
                });
                res.json({ message: "The Brand is updated successfully", id: brand._id });
            }
            catch (err) {
                res.status(402).json({ message: "Not Valid Data" });
            }
        });
    }
    readAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let brands = yield brand_1.default.find({}).populate('branches');
                res.json(brands);
            }
            catch (error) {
                res.status(502).json({ message: "Internal Server Error" });
            }
        });
    }
    read(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let brand = yield brand_1.default.findById(req.params['id']).populate('branches');
                res.json(brand);
            }
            catch (error) {
                res.status(404).json({ message: "Not Found" });
            }
        });
    }
    buyPackage(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let brans = yield brand_1.default.findById(req.params['id']).populate('Package')
                    .then(result => {
                    res.json(result);
                });
            }
            catch (error) {
                res.json(error);
            }
        });
    }
}
exports.BrandController = BrandController;
//# sourceMappingURL=brand.js.map