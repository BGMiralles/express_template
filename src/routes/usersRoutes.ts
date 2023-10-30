import { Router } from "express";
import { getAllAppointmentsByUserId, getAllUsers, login, profile, register, updateUserById } from "../controllers/usersController";
import { auth } from "../middlewares/auth";
import { isSuperAdmin } from "../middlewares/isSuperAdmin";

const router = Router()

router.post('/register', register)
router.post('/login', login)
router.get('/profile', auth, profile)
router.put("/update", auth, updateUserById)

router.get('/all', auth, isSuperAdmin, getAllUsers)
router.get('/myAppointments', auth, getAllAppointmentsByUserId)

export { router }
