import express from 'express'
import cors from 'cors'
import { Post, User } from './typeAliases'

const app = express()

app.use(express.json())
app.use(cors())

app.listen(3003, () => {
    console.log("O servidor está rodando na porta 3003")
})

app.get('/', (req, res) => {
    res.send("Hello, world!")
})

const user: User = {
    id: 1,
    name: "Natália",
    phone: 38999000099,
    email: "natalia@labenu.com",
    website: "linkedin/nat-dias"
}

const users: User[] = [ 
    {
        id: 1,
        name: "Natália",
        phone: 38999000099,
        email: "natalia@labenu.com",
        website: "linkedin/nat-dias"
    },
    {
        id: 2,
        name: "Fábio",
        phone: 38999000099,
        email: "fabio@labenu.com",
        website: "linkedin/fabio"
    },
    {
        id: 3,
        name: "Guariba",
        phone: 38999000099,
        email: "guariba@labenu.com",
        website: "linkedin/guariba"
    }
]

app.get('/users', (req, res) => {
    res.send({users})
} )


const posts: Post[] =  [
    {
        userId: 1,
        id: 1,
        title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
        body: "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
      },
      {
        userId: 2,
        id: 14,
        title: "voluptatem eligendi optio",
        body: "fuga et accusamus dolorum perferendis illo voluptas\nnon doloremque neque facere\nad qui dolorum molestiae beatae\nsed aut voluptas totam sit illum"
      },
      {
        userId: 3,
        id: 22,
        title: "dolor sint quo a velit explicabo quia nam",
        body: "eos qui et ipsum ipsam suscipit aut\nsed omnis non odio\nexpedita earum mollitia molestiae aut atque rem suscipit\nnam impedit esse"
      }
    ]

    app.get('/users/post', (req, res) => {
        res.send({posts})
    })
    
    app.get('/users/post/:id', (req, res) => {
        const id = req.params.id
        const postId = posts.filter((item:Post) => {
            return item.userId === Number(id)
        }).map((item:Post) => {
            return item
        })
        res.send({postId})
    })

    // app.delete('/users/post/:id', (req, res) => {
    //     const id = req.params.id
    //     const index = posts.id.indexOf(id, 0)
    //     const newPosts = posts.splice(index, 1)
    //     res.send({newPosts})
    // })


