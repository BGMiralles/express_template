import { Router } from "express";
import { getAllAppointmentsByArtistId, getAllArtist, login, registerTattoArtist} from "../controllers/artistsController";
import { auth } from "../middlewares/auth";
import { isSuperAdmin } from "../middlewares/isSuperAdmin";
import { isAdmin } from "../middlewares/isAdmin";


const router = Router()

router.post('/login', login)
router.post('/register',auth, isSuperAdmin, registerTattoArtist)
router.get('/all', auth, isAdmin, getAllArtist)
router.get('/myAppointments', auth, isAdmin, getAllAppointmentsByArtistId)
// router.get('/', auth, getAllTasksByUserId)
// router.get('/:id', auth, getTaskByUserId)
// router.put('/:id', auth, updateTaskById)

export { router }
