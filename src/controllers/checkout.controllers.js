import { db } from "../database/database.connection.js"

export async function checkout(req, res) {
    const { cardNumber, securityNumber, validationDateDay, validationDateYear, cardPassword } = req.body

    try {
        const checkout = { cardNumber: Number(cardNumber), 
                           securityNumber: Number(securityNumber), 
                           validationDateDay: Number(validationDateDay), 
                           validationDateYear: Number(validationDateYear), 
                           cardPassword: Number(cardPassword) 
                        }
        await db.collection("checkouts").insertOne(checkout)
        res.sendStatus(201)
    } catch (err) {
        res.status(500).send(err.message)
    }
}
