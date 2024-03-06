import { Router } from "express";
import businessController from "../controllers/business.controller.js";

const router = Router();

router.get("/", businessController.getBusinessController);
router.get("/:uid", businessController.getBusinessByUserIdController);
router.post("/:uid/product/:pid", businessController.insertProductBusinessController);


export default router;
