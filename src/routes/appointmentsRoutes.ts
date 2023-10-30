import { Router } from "express";
import { auth } from "../middlewares/auth";
import { isAdmin } from "../middlewares/isAdmin";
import { createAppointment, updateAppointmentByUserId } from "../controllers/appointmentsController";


const router = Router()

router.post('/create', auth, createAppointment)
router.put("/update", auth, updateAppointmentByUserId)

export { router }