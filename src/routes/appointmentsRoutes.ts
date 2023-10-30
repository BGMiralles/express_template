import { Router } from "express";
import { auth } from "../middlewares/auth";
import { isAdmin } from "../middlewares/isAdmin";
import { createAppointment } from "../controllers/appointmentsController";


const router = Router()

router.post('/appointment', auth, isAdmin ,createAppointment)

export { router }