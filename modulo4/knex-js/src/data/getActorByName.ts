import { connection } from "..";

export default async function getActorByName (nome: string): Promise<any> {
    const result = await connection.raw(`
        SELECT * FROM Actor
        WHERE name = "${nome}"
    `)
    return result
}
