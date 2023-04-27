import {db} from "../database/database.connection.js"
import bcrypt from "bcrypt"
import { v4 as uuid } from "uuid"


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


export async function login(req, res) {
    const { email, senha } = req.body

    try {
        const user = await db.collection("usuarios").findOne({email})
        if(!user) return res.status(404).send("Usuário não cadastrado!")

        const checarSenha = bcrypt.compareSync(senha, user.senha)
        if(!checarSenha) return res.status(401).send("Senha incorreta!")

        const token = uuid()
        await db.collection("sessão").insertOne({token, idUsuario: user._id})
        res.status(200).send({nome: user.nome,token, idUsuario: user._id})
    }
    catch (err) {
        res.status(500).send(err.message)
    }
}