import express, { Request, Response } from "express";
import {array} from "./data.js";
const app = express();

app.use(express.json());

app.listen(3003, () => {
    console.log("O servidor está rodando na porta 3003")
})

// 1- Crie uma nova API do zero (ou utilizando um template) e desenvolva um endpoint de teste com método GET
// no path “/test” que retorna uma mensagem genérica avisando que a API está funcional.

app.get("/test", (req, res) => {
    console.log("ok")
    res.send("Funcionou!")
})


// 2- Crie um arquivo chamado **`data.js`** que exporta um array de produtos. Cada produto será representado
// por um objeto com propriedades: id (`string`), name (`string`) e price (`number`).
// Popule manualmente o array com pelo menos 3 produtos.
    type Character = {
        id: string,
        name: string,
        price: number
    }

// 3- Desenvolva um endpoint que **cria um novo produto** e retorna a lista de produtos atualizada.
// A id do produto deve ser gerada automaticamente pela API.
app.post("/add-new-funko", (req: Request, res: Response) => {
    const {name, price} = req.body

    const newCharacter: Character = {
        id: Date.now().toString(), 
        name,
        price
    }
    
    const newArray =  array.push(newCharacter)
    res.send(newArray)
})

// 4- Crie um endpoint que retorna todos os produtos.

    app.get('/products', (req: Request, res: Response) => {
        res.send(array)
    })

// 5- Crie um endpoint que edita o preço de um determinado produto e retorna a lista de produtos atualizada.
// 6- Construa um endpoint que deleta um determinado produto e retorna a lista de produtos atualizada.
// 7- Refatore o endpoint do exercício 3 (criar produto) para que sejam implementados fluxos de validação
// dos dados recebidos (`name` e `price`)
// - erro caso um ou nenhum deles forem recebidos
// - erro caso `name` seja diferente de `string`
// - erro caso `price` seja diferente de `number`
// - erro caso `price` seja igual ou menor que `0`
// - erro caso algo inesperado aconteça
// 8- Refatore o endpoint do exercício 5 (editar produto) para que sejam
// implementados fluxos de validação dos dados recebidos (`price`)
// - erro caso `price` não seja recebido
// - erro caso `price` seja diferente de `number`
// - erro caso `price` seja igual ou menor que `0`
// - erro caso id não seja recebida
// - erro caso o produto a ser editado não seja encontrado
// - erro caso algo inesperado aconteça
// 9- Refatore o endpoint do exercício 6 (deletar produto) para que sejam
// implementados fluxos de validação dos dados recebidos (`id`)
//- erro caso `id` não seja recebido
//- erro caso o produto escolhido não seja encontrado
//- erro caso algo inesperado aconteça