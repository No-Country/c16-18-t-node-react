import { Router } from "express";
import orderController from "../controllers/order.controller.js";
import {
  validateId,
} from "../helpers/checks/order.check.js";

const router = Router();

router.get("/", orderController.getOrdersController);

router.get("/:oid", validateId, orderController.getOrderByIdController);

router.post("/", orderController.createOrderController);

router.delete("/:oid", validateId, orderController.deleteOrderController);

router.post("/:oid/product/:pid", orderController.addProductOrderController);

export default router;
