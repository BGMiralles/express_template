import { Router } from "express";
import { auth } from "../middlewares/auth";
import { isAdmin } from "../middlewares/isAdmin";
import { createAppointment, deleteAppointmentByUserId, updateAppointmentByUserId } from "../controllers/appointmentsController";


const router = Router()

router.post('/create', auth, createAppointment)
router.put("/update", auth, updateAppointmentByUserId)
router.delete("/delete", auth, deleteAppointmentByUserId)

export { router }