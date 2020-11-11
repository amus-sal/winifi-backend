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
exports.BranchController = void 0;
const branch_1 = __importDefault(require("../models/branch"));
const brand_1 = __importDefault(require("../models/brand"));
class BranchController {
    constructor() { }
    readAll(req, res) {
        throw new Error('Method not implemented.');
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let branch = yield branch_1.default.create(req.body);
                let brand = yield brand_1.default.findByIdAndUpdate(req.body.brand, {
                    $push: {
                        branches: branch._id
                    }
                });
                res.json({ message: "The branch is created successfully", id: branch._id });
            }
            catch (err) {
                console.log(err);
                res.status(402).json({ message: "Not Valid Data" });
            }
        });
    }
    update(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let branch = yield branch_1.default.findByIdAndUpdate(req.params.id, {
                    $set: req.body
                });
                res.json({ message: "The Branch is updated successfully", id: branch._id });
            }
            catch (err) {
                res.status(402).json({ message: "Not Valid Data" });
            }
        });
    }
    read(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let branch = yield branch_1.default.findById(req.params['id']).populate('admins');
                res.json(branch);
            }
            catch (error) {
                res.status(404).json({ message: "Not Found" });
            }
        });
    }
}
exports.BranchController = BranchController;
//# sourceMappingURL=branch.js.map