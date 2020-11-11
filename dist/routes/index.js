"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const brand_1 = __importDefault(require("./brand"));
const branch_1 = __importDefault(require("./branch"));
const package_1 = __importDefault(require("./package"));
// import admin from './admin.ts.tx'
// import auth from './auth'
// import adminrole from './adminrole.ts.txt'
class Router {
    constructor(server) {
        server.use('/brand', brand_1.default);
        server.use('/branch', branch_1.default);
        server.use('/package', package_1.default);
    }
}
exports.default = Router;
//# sourceMappingURL=index.js.map