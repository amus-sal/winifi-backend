import { Router, Response } from "express";
const router: Router = Router();
import {BrandController} from "../controllers/brand"


const brandController = new BrandController();

router.get("/list",brandController.readAll);
router.post("/create",brandController.create);
router.put("/:id",brandController.update);
router.get("/:id", brandController.read);

router.get("/buy/:id", brandController.buyPackage)

// router.delete("/:id",brandController.delete);



export default router
