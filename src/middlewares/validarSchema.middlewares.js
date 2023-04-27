

export function validarSchema(schema){
    return (req, res, next) => {
        
        const validar = schema.validate(req.body, { abortEarly: false})

        if (validar.error) {
            const errors = validar.error.details.map(detail => detail.message)
            return res.status(422).send(errors)
        }
        next()
    }
}