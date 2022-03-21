import { inputDTO, inputLoginDTO } from "../controller/UserController";
import UserDatabase from "../data/UserDatabase";
import { compare, hash } from "../services/HashManager";
import { generateId } from "../services/IdGenerator";
import { generateToken } from "../services/Tokens";
import { user } from "../types/UserTypes";

const userDB = new UserDatabase

export default class UserBusiness {
    singup = async (input: inputDTO): Promise<string> => {

        if (!input.name || !input.email || !input.password) {
            const message = '"name", "email" and "password" must be provided'
            throw new Error(message)
        }

        const id: string = generateId()

        const cypherPassword = await hash(input.password);

        const newUser: user = {
            id: id,
            name: input.name,
            email: input.email,
            password: cypherPassword
        }

        await userDB.singup(newUser)

        const token: string = generateToken({ id })

        return token

    }

    login = async (input: inputLoginDTO): Promise<string> => {
        if (!input.email || !input.password) {
            let message = '"email" and "password" must be provided'
            throw new Error(message)
        }

        const queryResult: any = await userDB.login(input.email)

        if (!queryResult) {
            let message = "Invalid credentials"
            throw new Error(message)
        }

        const passwordIsCorrect: boolean = await compare(input.password, queryResult.password)

        if(!passwordIsCorrect) {
            let message = "Invalid credentials"
            throw new Error(message)
        }

        const token: string = generateToken(queryResult.id)

        return token
    }
}