import { user } from "../types/UserTypes";
import BaseDatabase from "./BaseDatabase";

export default class UserDatabase extends BaseDatabase {
  singup = async (user: user) => {
    await UserDatabase.connection('labook_users')
      .insert({
        id: user.id,
        name: user.name,
        email: user.email,
        password: user.password
      })
  }

  login = async (email: string) => { 
    const result = await UserDatabase.connection("labook_users")
      .select("*")
      .where({ email })

      return result[0]
  }
  
}