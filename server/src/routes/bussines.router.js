import { Router } from "express";
import businessController from "../controllers/business.controller.js";

const router = Router();

router.get("/", businessController.getBusinessController);

export default router;
