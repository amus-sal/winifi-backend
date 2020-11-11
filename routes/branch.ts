import { Router, Response } from "express";
const router: Router = Router();
import {BranchController} from "../controllers/branch"


const branchController = new BranchController();


router.post("/create",branchController.create);
router.put("/:id",branchController.update);
router.get("/:id",branchController.read);
// router.delete("/:id",branchController.delete);

  

export default router