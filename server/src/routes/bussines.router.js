import { Router } from "express";
import {
  getBusiness,
  createBusiness,
} from "../controllers/bussines.controller.js";

const router = Router();

router.post("/", createBusiness);
router.get("/:id", getBusiness);

export default router;
