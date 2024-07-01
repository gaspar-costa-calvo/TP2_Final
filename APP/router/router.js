import { Router } from "express";
import palabraRouter from "./palabraRouter.js";

const router = Router();
router.use("/palabra", palabraRouter);



export default router;