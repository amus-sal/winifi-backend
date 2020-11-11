"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const package_1 = require("../controllers/package");
const packageController = new package_1.PackageController();
router.get("/list", packageController.readAll);
router.post("/create", packageController.create);
router.put("/:id", packageController.update);
router.get("/:id", packageController.read);
exports.default = router;
//# sourceMappingURL=package.js.map