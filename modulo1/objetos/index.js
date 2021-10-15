//INTERPRETAÇÃO
/* Exercício 1
Matheus Nachtergaele
Virginia Cavendish
Globo 14h

Exercício 2
{nome: Juca, idade: 3, raca: SRD}
{nome: Juba, idade: 3, raca: SRD}
{nome: Jub, idade: 3, raca: SRD}

Copia a constante que tem o nome que está logo após os 3 pontos e substitui a informação informada após a virgula.

Exercício 3
false
undefined

A função retorna o valor inserido na chave pedida do objeto informado. No caso do primeiro console.log, retorna false, pq é esse o valor da chave backender. No segundo console.log, retorna undefined, porque a chave "altura" não foi declarada, logo não há informações sobre isso para serem lidas pelo programa.
*/

//ESCRITA
//Exercício 1
    //a.
    const pessoa = {
        nome: "Natália",
        apelidos: ["Nat", "Nana", "Nah"]
    } 

    function mensagem(apresentar) {
        console.log(`Eu sou ${apresentar.nome}, mas pode me chamar de: ${apresentar.apelidos[0]}, ${apresentar.apelidos[1]} ou ${apresentar.apelidos[2]}`)
    }

    mensagem(pessoa)

    //b.
    const novaPessoa = {
        ...pessoa,
        apelidos: ["Natlinda", "Natalinha", "Atnas"]
    }

    mensagem(novaPessoa)

//Exercício 2
//a.
    const objeto1 = {
        nome: "Natália",
        idade: 26,
        profissao: "uma futura programadora de muito sucesso, Amém!"
    }

    const objeto2 = {
        nome: "Letícia",
        idade: 22,
        profissao: "Farmacêutica"
    }

    //b. 
    function infos(parametro) {
        console.log(
            [parametro.nome, parametro.nome.length, parametro.idade, parametro.profissao, parametro.profissao.length]
        )
    }

    infos(objeto1)
    infos(objeto2)

//Exercício 3
//a.
let carrinho = []

//b.
const fruta1 = {
    nome: "Morango",
    disponibilidade: true
}

const fruta2 = {
    ...fruta1,
    nome: "Melancia"
}

const fruta3 = {
    ...fruta2,
    nome: "Caqui"
}

//c.
function mercado(frutas) {
   carrinho.push(frutas)
}

mercado(fruta1)
mercado(fruta2)
mercado(fruta3)

//d.
console.log(carrinho)


//DESAFIOS
//1.
function usuario() {
    const nome = prompt("Qual o seu nome?")
    const idade = Number(prompt("Qual a sua idade?"))
    const profissao = prompt("Qual a sua profissão")
    const objeto = {
        nome,
        idade,
        profissao
    }
    console.log(objeto)
    console.log(typeof objeto)
}

usuario()

//2.
const filme1 = {
    nome: "Memória de uma Gueixa",
    lançamento: 2005
}

const filme2 = {
    nome: "O Conde de Monte Cristo",
    lançamento: 2002
}

function filmes() {
    const primeiro = filme1.lançamento < filme2.lançamento
    const mesmoAno = filme1.lançamento === filme2.lançamento
    console.log(`O primeiro filme foi lançado antes do segundo? - ${primeiro}`)
    console.log(`O primeiro filme foi lançado no mesmo ano do segundo? - ${mesmoAno}`)
}

filmes()


//3.
 function disponivel(fruta) {
        return fruta.disponibilidade = !fruta.disponibilidade
     
    }
 console.log(disponivel(fruta1))
 console.log(disponivel(fruta2))
 console.log(disponivel(fruta3))

 
