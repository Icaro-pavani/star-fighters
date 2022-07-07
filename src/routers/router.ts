import { Router } from "express";
import { battle } from "../controllers/apiController.js";
import validSchema from "../middleware/validSchema.js";
import battleSchema from "../Schemas/battleSchema.js";

const router = Router();

router.post("/battle", validSchema(battleSchema), battle);

export default router;
