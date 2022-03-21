import { Request, Response } from "express"
import UserBusiness from "../business/UserBusiness"

export type inputDTO = {
    name: string,
    email: string,
    password: string
}

export type inputLoginDTO = {
    email: string,
    password: string
}

export default class UserController {
    constructor(private userBusiness: UserBusiness) {}

    singup = async (req: Request, res: Response) => {
        try {
            let message = "Success!"
            const { name, email, password } = req.body


            const input: inputDTO = {
                name, email, password
            }
            const token = await this.userBusiness.singup(input)

            res.send({message, token})

        } catch (error:any) {
            res.status(400).send(error.message)
        }
    }

    login = async (req: Request, res: Response) => {
        try {
            let message = "Success!"

            const { email, password } = req.body

            const inputLogin: inputLoginDTO = {
                email, password
            }       

            const token = await this.userBusiness.login(inputLogin)

            res.send({message, token})

        } catch (error: any) {
            res.status(400).send(error.message)
        }
    }
}