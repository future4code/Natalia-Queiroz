import knex, { Knex } from 'knex'
import dotenv from 'dotenv'

dotenv.config()

const connection: Knex = knex({
    client: 'mysql',
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_SCHEMA,
        port: 3006,
        multiStatements: true
    }
})
export default connection