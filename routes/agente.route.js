import { Router } from "express";
import { AgenteController } from "../controllers/agente.controller.js"

const router = Router()

router.post('/login', AgenteController.login)

export default router;