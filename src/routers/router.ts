import { Router } from "express";
import { battle, ranking } from "../controllers/apiController.js";
import validSchema from "../middleware/validSchema.js";
import battleSchema from "../Schemas/battleSchema.js";

const router = Router();

router.post("/battle", validSchema(battleSchema), battle);
router.get("/ranking", ranking);

export default router;
