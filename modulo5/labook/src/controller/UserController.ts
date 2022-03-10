import { Request, Response } from "express"

export type inputDTO = {
    name: string,
    email: string,
    password: string
}

export default class UserController {
    singup = async (req: Request, res: Response) => {
        try {
            let message = "Success!"
            const { name, email, password } = req.body


            const input: inputDTO = {
                name, email, password
            }
            const token = await userBusiness.singup(input)

            res.send(token)
        }