import cors from "cors"
import express from "express"
import router from "./routes/index.routes.js"

const app = express()
app.use(cors())
app.use(express.json())
app.use(router)

const PORT = 5000
app.listen(PORT, () => console.log(`Rodando na porta ${PORT}`))