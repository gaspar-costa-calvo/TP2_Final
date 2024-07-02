import { Router } from "express";
import sondaRouter from "./sondasRoutes.js";


const router = Router();
router.use("/sondas", sondaRouter);



export default router;