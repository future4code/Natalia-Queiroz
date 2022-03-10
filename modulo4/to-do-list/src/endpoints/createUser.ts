import { Request, Response } from "express";

export default async function createUser (req: Request, res: Response) {
    try {
        //validar entradas
        if(
            !req.body.name ||
            !req.body.nickname ||
            !req.body.email
        ){
            res
            .status(400)
            .send('Preencha os campos "name", "nickname" e "email"')
        }
        //consultar banco de dados
        await 
        //validar saidas

        //enviar resposta
    } catch (error) {
        res.status(400).send({
            message: error.message || error.sqlMessage
        })
    }
}