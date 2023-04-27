import { Router } from "express"
import { validarSchema } from "../middlewares/validarSchema.middlewares.js"
import { userSchema } from "../schemas/autenticacao.schemas.js"
import { cadastro } from "../controllers/autenticacao.controllers.js"

const autenticacaoRouter = Router()

autenticacaoRouter.post("/cadastro", validarSchema(userSchema), cadastro)
autenticacaoRouter.post("/login")
autenticacaoRouter.post("/logout")

export default autenticacaoRouter