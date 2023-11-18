import { Router } from "express";
import { getAllAppointmentsByArtistId, getAllArtist, login, registerTattoArtist} from "../controllers/artistsController";
import { auth } from "../middlewares/auth";
import { isSuperAdmin } from "../middlewares/isSuperAdmin";
import { isAdmin } from "../middlewares/isAdmin";


const router = Router()

router.post('/login', login)
router.post('/register', registerTattoArtist)
router.get('/all', getAllArtist)
router.get('/myAppointments', auth, isAdmin, getAllAppointmentsByArtistId)

export { router }
