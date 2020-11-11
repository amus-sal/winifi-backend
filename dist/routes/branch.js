"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const branch_1 = require("../controllers/branch");
const branchController = new branch_1.BranchController();
router.post("/create", branchController.create);
router.put("/:id", branchController.update);
router.get("/:id", branchController.read);
// router.delete("/:id",branchController.delete);
exports.default = router;
//# sourceMappingURL=branch.js.map