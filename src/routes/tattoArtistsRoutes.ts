import { Router } from "express";
import { registerTattoArtist} from "../controllers/tasksController";
import { auth } from "../middlewares/auth";
import { isSuperAdmin } from "../middlewares/isSuperAdmin";

const router = Router()

router.post('/register', isSuperAdmin, registerTattoArtist)
// router.get('/', auth, getAllTasksByUserId)
// router.get('/:id', auth, getTaskByUserId)
// router.put('/:id', auth, updateTaskById)

export { router }
