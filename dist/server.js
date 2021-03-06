"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./app"));
const db_1 = __importDefault(require("./DB/db"));
const port = parseInt(process.env.PORT || '3000');
db_1.default();
const server = new app_1.default().Start(port)
    .then(port => console.log(`Server running on port ${port}`))
    .catch(error => {
    console.log(error);
    process.exit(1);
});
exports.default = server;
//# sourceMappingURL=server.js.map