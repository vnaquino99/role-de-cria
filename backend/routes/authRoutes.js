import express from "express"
import { cadastro, login } from "../controller/authController.js"

const router = express.Router()

router.post("/login", login)
router.post("/signup", cadastro)

export default router
