import app from './app'
import { compareHash, generateHash } from './services/hashManager'
import generateId from './services/idGenerator'


app.get("/")

const cypherText = generateHash("Hello, world")

console.log(
    compareHash("Hello, world", cypherText)
)
