import { Router } from "express";
import SondaController from "../controllers/sondaController.js";

const sondaRouter = Router();
const sondaController = new SondaController()

sondaRouter.get("/", sondaController.getAllSondas);
sondaRouter.get("/:id", sondaController.getSondaById);
sondaRouter.post("/", sondaController.cargaTemperatura);


export default sondaRouter;