import { Router } from "express";
import PalabraController from "../controllers/palabraController.js"

const palabraRouter = Router();
const palabraController = new PalabraController()

palabraRouter.get("/", palabraController.getAllPalabras);
palabraRouter.get("/:id", palabraController.getPalabraById);
palabraRouter.post("/", palabraController.createPalabra);
palabraRouter.put("/:id", palabraController.editPalabra);
palabraRouter.delete("/:id", palabraController.deletePalabra);

palabraRouter.post("/api/:cantidad", palabraController.getApiPalabras);

export default palabraRouter;