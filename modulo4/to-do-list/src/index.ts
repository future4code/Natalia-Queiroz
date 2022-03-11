import express from 'express'
import knex from 'knex'
import dotenv from 'dotenv'
import createUser from './endpoints/createUser'

dotenv.config()

const connection = knex({
 client: "mysql",
 connection: {
 host: process.env.DB_HOST,
 port: 3306,
 user: process.env.DB_USER,
 password: process.env.DB_PASSWORD,
 database: process.env.DB_DATABASE,
 multipleStatements: true
 }
})

export default connection

const app = express()
app.use(express.json())

app.put('/user', createUser)

app.listen(3003, () => {
    console.log("Server is running in 3003")
})


