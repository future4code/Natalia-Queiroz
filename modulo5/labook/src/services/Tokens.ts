import * as jwt from "jsonwebtoken"
import { authenticationData } from "../types/Authentication"

export function generateToken(
    payload: authenticationData
 ): string {
    return jwt.sign(
       payload,
       process.env.JWT_KEY as string,
       {
          expiresIn: "24h"
       }
    )
 }
 
 export function getTokenData(
    token: string
 ): authenticationData {
    const result: any = jwt.verify(
       token,
       process.env.JWT_KEY as string
    )
 
    return { id: result.id, }
 }