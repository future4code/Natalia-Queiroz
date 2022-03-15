import { Request, Response } from "express";
import { BaseDatabase } from "../data/BaseDatabase";
import { User } from "../entities/User";
import { IdGnerator } from "../services/idGenerator";

export const createUser = async (req: Request, res: Response) => {
    try {
        const {name, email, age} = req.body
        const id = new IdGnerator().execute()

        const newUser = new User(
            id,
            name,
            email,
            age
        )

        const createUser = (user: User) => BaseDatabase.connection("labecommerce_users").insert(user)

        await createUser (newUser)

        res.status(200).send({newUser})

    } catch (error: any) {
        
        res.status(400).send({message: error.message} )
    }
}