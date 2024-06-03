import { Router } from "express";
import * as userController from "./user.controller.js";
const router = Router();

router.post("/register", userController.signUp);
router.post("/login", userController.signIn);

export default router;
