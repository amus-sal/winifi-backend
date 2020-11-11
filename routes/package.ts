import { Router } from "express";
const router: Router = Router();
import  {PackageController} from "../controllers/package"




const packageController = new PackageController();



router.get("/list",packageController.readAll);
router.post("/create",packageController.create);
router.put("/:id",packageController.update);
router.get("/:id",packageController.read);



export default router;
