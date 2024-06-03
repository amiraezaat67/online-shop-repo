import { Router } from "express";
import * as productController from "./product.controller.js";
const router = Router();

router.post("/create", productController.createProduct);
router.get("/list", productController.listProducts);
export default router;
