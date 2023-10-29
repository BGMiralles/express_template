import { Router } from "express";
import { login, registerTattoArtist} from "../controllers/artistsController";
import { auth } from "../middlewares/auth";
import { isSuperAdmin } from "../middlewares/isSuperAdmin";


const router = Router()

router.post('/login', login)
router.post('/register',auth, isSuperAdmin, registerTattoArtist)
// router.get('/', auth, getAllTasksByUserId)
// router.get('/:id', auth, getTaskByUserId)
// router.put('/:id', auth, updateTaskById)

export { router }
