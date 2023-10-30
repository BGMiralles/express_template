import { Router } from "express";
import { auth } from "../middlewares/auth";
import { isAdmin } from "../middlewares/isAdmin";
import { createTattoo, deleteTattoo, updateTattoById } from "../controllers/tattooController";


const router = Router()

router.post('/create', auth, isAdmin, createTattoo)
router.put("/update", auth, isAdmin, updateTattoById)
router.delete("/delete", auth, isAdmin, deleteTattoo)

export { router }