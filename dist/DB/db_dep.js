"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = __importDefault(require("sequelize"));
class Database {
    constructor() {
        this.db = process.env.DB_NAME || 'winifi';
        this.user = process.env.DB_USER || 'root';
        this.password = process.env.DB_PASS || '1234';
        this.host = process.env.DB_HOST || 'localhost';
        this.port = Number(process.env.DB_PORT) || 3306;
        this.maxPool = Number(process.env.MAX_POOL) || 10;
        this.minPool = Number(process.env.MIN_POOL) || 3;
        this.database = new sequelize_1.default(this.db, this.user, this.password, {
            host: this.host,
            dialect: 'mysql',
            port: this.port,
            logging: false,
            operatorsAliases: false,
            pool: {
                max: this.maxPool,
                min: this.minPool,
                acquire: 30000,
                idle: 10000
            }
        });
        this.database.authenticate()
            .then(() => {
            console.log('Connection has been established successfully.');
        })
            .catch(err => {
            console.error('Unable to connect to the database:', err);
        });
        this.database.sync({
        // Using 'force' will drop any table defined in the models and create them again.
        // force: true
        });
    }
}
exports.default = Database;
//# sourceMappingURL=db_dep.js.map