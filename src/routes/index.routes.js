import { Router } from "express";
import authRouter from "./user.rotes.js";
import shoppingRouter from "./shopping.routes.js";

const router = Router();
router.use(authRouter);
router.use(shoppingRouter);

export default router;