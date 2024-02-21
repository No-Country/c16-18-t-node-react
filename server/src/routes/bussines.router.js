import { Router } from "express";
import {
  getBusiness,
  createBusiness,
} from "../controllers/bussines.controller";

const router = express.Router();

router.post("/", createBusiness);
router.get("/:id", getBusiness);

export default router;
