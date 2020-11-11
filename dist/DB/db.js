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
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const connectDB = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const mongoURI = "mongodb://localhost:27017/winifi?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false";
        const options = {
            useNewUrlParser: true,
            useCreateIndex: true,
            useFindAndModify: false,
            useUnifiedTopology: true,
        };
        yield mongoose_1.connect(mongoURI, options);
        console.log("MongoDB Connected...");
    }
    catch (err) {
        console.error(err.message);
        // Exit process with failure
        process.exit(1);
    }
});
exports.default = connectDB;
//# sourceMappingURL=db.js.map