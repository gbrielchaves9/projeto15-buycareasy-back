import { Router } from "express"
import { validarSchema } from "../middlewares/validarSchema.middlewares.js"
import { userSchema, loginSchema } from "../schemas/autenticacao.schemas.js"
import { cadastro, login } from "../controllers/autenticacao.controllers.js"

const autenticacaoRouter = Router()

autenticacaoRouter.post("/cadastro", validarSchema(userSchema), cadastro)
autenticacaoRouter.post("/login", validarSchema(loginSchema), login)
autenticacaoRouter.post("/logout")

export default autenticacaoRouter