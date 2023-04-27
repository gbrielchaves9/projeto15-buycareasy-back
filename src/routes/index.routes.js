import { Router } from "express"
import checkoutRouter from "./checkout.routes.js"
import autenticacaoRouter from "./autenticacao.routes.js"

const router = Router()
router.use(autenticacaoRouter)
router.use(checkoutRouter)

export default router