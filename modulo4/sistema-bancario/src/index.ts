import express, { Express, Request, Response } from "express"
import cors from "cors"
import { accounts } from "./accounts"

const app = express()

app.use(express.json())
app.use(cors())

app.post("/users/create", (req: Request, res: Response) => {
    try{
        
        const {name, CPF, birth_date_string} = req.body

        const [day, month, year] = birth_date_string.split("/")

        const birth_date: Date = new Date(`${year}-${month}-${day}`)

        //validar entradas da req
        const ageMilisseconds: number = Date.now() - birth_date.getTime()

        const ageInYears: number = ageMilisseconds / 1000 / 60 / 60 / 24 / 365

        if (ageInYears < 18) {
            res.statusCode = 406
            throw new Error("Idade deve ser maior que 18 anos")
        }
        //consulta a base de dados - ou alterar
        accounts.push({
            name,
            CPF,
            birth_date,
            balance: 0,
            statement: []
        })

        //validar resultados da consulta
        //enviar a res
        res.status(201).send("Conta criada com sucesso!")
    } catch (error) {
        res.send(error)
    }
})

app.get("/users/all", (req: Request, res: Response) => {
    try {
        if (!accounts.length) {
            res.statusCode = 404
            throw new Error("Nenhuma conta encontrada")
        }

        res.status(200).send(accounts)
    } catch (error) {
        res.send(error)
    }
})

app.listen(3003, ()=>{
    console.log("Servidor rodando na porta 3003")
})

