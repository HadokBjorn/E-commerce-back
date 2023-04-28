import { Router } from "express";
import authRouter from "./user.rotes.js";

const router = Router();
router.use(authRouter);

export default router;