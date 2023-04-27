import {db} from "../database/database.connection.js"
import bcrypt from "bcrypt"


export async function cadastro(req, res) {
    const { nome, email, senha } = req.body

    try {
        const user = await db.collection("usuarios").findOne({email})
         if (user) return res.status(409).send("Email já cadastrado")

         const hash = bcrypt.hashSync(senha, 10)

         await db.collection("usuarios").insertOne({nome, email, senha: hash})
         res.sendStatus(201)

    } catch (err) {
        res.status(500).send(err.message)
    }
}