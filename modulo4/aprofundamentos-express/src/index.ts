import express from "express";

const app = express();

app.use(express.json());

app.listen(3003, () => {
  console.log("O servidor está em funcionamento na porta 3003")
})


//Faça novamente a instalação e configuração do Express na pasta do exercício. Para testar, crie um 
//endpoint que aponte para o path “/ping”. Esse endpoint pode responder apenas com uma mensagem “pong”.

app.get("/ping", (req, res) => {
    res.send("pong")
})

//Acesse a API do JSONPlaceholder e observe os endpoints que buscam 
//[afazeres](https://jsonplaceholder.typicode.com/todos) (”*to dos”*). 
//Crie uma variável de tipo para representar cada afazer.

type infos = {
    userId: number,
    id: number,
    title: string,
    concluído: boolean
}
const toDoList: infos[] = [
    {
      userId: 1,
      id: 1,
      title:"delectus aut autem",
      concluído: false
    },
    {
      userId: 1,
      id: 2,
      title: "quis ut nam facilis et officia qui",
      concluído: false
    },
    {
      userId: 1,
      id: 3,
      title: "fugiat veniam minus",
      concluído: false
    },
    {
      userId: 1,
      id: 4,
      title: "et porro tempora",
      concluído: true
    },
    {
      userId: 1,
      id: 5,
      title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
      concluído: false
    },
    {
      userId: 1,
      id: 6,
      title: "qui ullam ratione quibusdam voluptatem quia omnis",
      concluído: false
    },
    {
      userId: 1,
      id: 7,
      title: "illo expedita consequatur quia in",
      concluído: false
    },
    {
      userId: 1,
      id: 8,
      title: "quo adipisci enim quam ut ab",
      concluído: true
    },
    {
      userId: 1,
      id: 9,
      title: "molestiae perspiciatis ipsa",
      concluído: false
    },
    {
      userId: 1,
      id: 10,
      title: "illo est ratione doloremque quia maiores aut",
      concluído: true
    }]

//Construa um endpoint que retorne todos os afazeres do exercício anterior de acordo com um 
//único status, ou seja, retorne ou afazeres concluídos ou somente os que ainda estão em andamento.

app.get("/to-do-list", (req, res) => {
    const ask = req.query.ask
    const response = toDoList.filter(tasks => {
        if(ask === "true") {
            return tasks.concluído === true
        } else if(ask === "false") {
            return tasks.concluído === false
        }
    })
    .map((tasks) => {
        return tasks
    })
    res.send(response)
})

//Construa um endpoint de criação de afazer. A resposta deve retornar o array de afazeres atualizado.

app.post("/to-do-list", (req, res) => {
    const newTask = req.query.newTask
    const newToDoList = toDoList.push(newTask)
    res.send(newToDoList)
})