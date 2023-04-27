import { Router } from "express"

const checkoutRouter = Router()

checkoutRouter.post("/checkout")
checkoutRouter.get("/checkout")

export default checkoutRouter