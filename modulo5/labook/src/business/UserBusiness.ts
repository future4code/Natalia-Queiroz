import { inputDTO } from "../controller/UserController";
import { hash } from "../services/HashManager";
import { generateId } from "../services/IdGenerator";
import { user } from "../types/UserTypes";

export default class UserBusiness {
    singup = async(input: inputDTO): Promisse<string> {

        if (!input.name || !input.email || !input.password) {
            const message = '"name", "email" and "password" must be provided'
            throw new Error(message)
         }

        const id: string = generateId()
     
        const cypherPassword = await hash(input.password);
  
        const newUser: user = {
            id: 
            name:
            email:
            password: 
        }
        await connection('labook_users')
           .insert({
              id,
              name,
              email,
              password: cypherPassword
           })
  
        const token: string = generateToken({ id })
  
        res.status(201).send({ message, token })
  
     } catch (error: any) {
        res.statusCode = 400
        let message = error.sqlMessage || error.message
  
        res.send({ message })
     }
  })
    }
}