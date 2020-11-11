"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const brand_1 = require("../controllers/brand");
const brandController = new brand_1.BrandController();
router.get("/list", brandController.readAll);
router.post("/create", brandController.create);
router.put("/:id", brandController.update);
router.get("/:id", brandController.read);
// router.delete("/:id",brandController.delete);
exports.default = router;
//# sourceMappingURL=brand.js.map