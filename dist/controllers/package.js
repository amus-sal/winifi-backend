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
exports.PackageController = void 0;
const package_1 = __importDefault(require("../models/package"));
const validator_1 = require("../helper/validator");
class PackageController {
    constructor() { }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let validation = validator_1.ValidatePackage(req.body);
                if (validation.error) {
                    res.status(402).json({ message: "Not Valid Data" });
                }
                yield package_1.default.findByIdAndUpdate(req.params.id, {
                    $set: req.body
                });
                res.json({ message: "The Package is updated successfully" });
            }
            catch (err) {
                res.status(402).json({ message: "Not Valid Data" });
            }
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let validation = validator_1.ValidatePackage(req.body);
                if (validation.error) {
                    res.status(402).json(validation.error);
                    return;
                }
                yield package_1.default.create(req.body);
                res.json({ message: "The Package is created successfully" });
            }
            catch (err) {
                res.status(502).json({ message: err });
            }
        });
    }
    read(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let pack = yield package_1.default.findById(req.params['id']);
                res.json(pack);
            }
            catch (error) {
                res.status(404).json({ message: "Not Found" });
            }
        });
    }
    readAll(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let packages = yield package_1.default.find();
                res.json(packages);
            }
            catch (error) {
                res.status(502).json({ message: "Internal Server Error" });
            }
        });
    }
}
exports.PackageController = PackageController;
//# sourceMappingURL=package.js.map