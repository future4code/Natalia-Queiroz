//INTERPRETAÇÃO
/*Exercício 1
a. O código pede um número ao usuário e verificar se ele é uma divisão por 2 exata.
b. Par
c. Ímpar

Exercício 2
a. Para verificar o valor da fruta escolhida
b. O preço da fruta maçã é R$ 2.25
c. 

Exercício 3
a. Pedindo para o usuário digitar um número
b. Esse número passou no teste. Não aparecerá nada.
c. Sim. A variável mensagem foi declarada em um escopo filho, logo o escopo pai não consegue acessá-la. (Ela só existe dentro do escopo filho)
*/

//ESCRITA
//Exercício 1
const idade = Number(prompt("Qual sua idade?"))

if (idade >= 18) {
    console.log("Você pode dirigir.")
} else {
    console.log("Você não pode dirigir.")
}


//Exercício 2
const turno = prompt("Digite M caso você estudade no turno matutino. Digite V caso estude no turno vespertino. Digite N caso estude no turno noturno.")

const lerTurno = turno.toUpperCase()

if (lerTurno === "M") {
    console.log("Bom dia!")
} else if (lerTurno === "V") {
    console.log("Boa tarde!")
} else if (lerTurno === "N") {
    console.log("Boa noite!")
}


//Exercício 3
switch (lerTurno) {
    case 'M':
        console.log("Bom dia!")
        break

    case 'V':
        console.log("Boa tarde!")
        break

    case 'N':
        console.log("Boa noite!")
}

//Exercício 4
// const pecaFilme = prompt("Qual o gênero do filme que irão assistir?")

// const filme = pecaFilme.toLowerCase()

// const preco = Number(prompt("Qual o valor do ingresso comprado?"))

// if (filme === 'fantasia' && preco < 15) {
//     console.log("Bom filme!")
// } else {
//     console.log("Escolha outro filme :(")
// }

//DESAFIOS
//1.
const pecaFilme = prompt("Qual o gênero do filme que irão assistir?")

const filme = pecaFilme.toLowerCase()

const preco = Number(prompt("Qual o valor do ingresso comprado?"))

const lanchinho = prompt("Qual lanchinho vai comprar?")

if (filme === 'fantasia' && preco < 15) {
    console.log("Bom filme!")
    console.log(`Aproveite o seu ${lanchinho}`)
} else {
    console.log("Escolha outro filme :(")
}

//2. AINDA ESTOU TRABALHANDO NO DESAFIO 2
const nomeEspectador = prompt("Digite seu nome completo")
const tipoJogo = prompt("Digite IN se o jogo for internacional ou DO se for doméstico").toUpperCase()
const etapaJogo = prompt("Digite SF se o jogo for uma semi-final, DT se for a decisão de terceiro lugar ou FI se for a final").toUpperCase()
const categoria = Number(prompt("Digite a categoria do jogo que irá assistir: 1, 2, 3 ou 4"))
const ingressos = Number(prompt("Quantos ingressos você deseja?"))

//SF semifinal  - cat 1 2 3 4  //DT decisão terceiro lugar - cat 1 2 3 4 //FI final - cat 1 2 3 4
let valorIngresso

const ticket = () => {
    if(tipoJogo === "DO") {
        if (etapaJogo === "SF") {
            if(categoria === 1) {
                return valorIngresso = 1320
            } else if (categoria === 2) {
                return valorIngresso = 880
            } else if (categoria === 3) {
                return valorIngresso = 550
            } else if (categoria === 4) {
                return valorIngresso = 220
            } else {
                console.log("Categoria inválida.")
            }
    
        } else if (etapaJogo === "DT") {
            if(categoria === 1) {
                return valorIngresso = 660
            } else if (categoria === 2) {
                return valorIngresso = 440
            } else if (categoria === 3) {
                return valorIngresso = 330
            } else if (categoria === 4) {
                return valorIngresso = 170
            } else {
                console.log("Categoria inválida.")
            }

        } else if (etapaJogo === "FI") {
            if(categoria === 1) {
                return valorIngresso = 1980
            } else if (categoria === 2) {
                return valorIngresso = 1320
            } else if (categoria === 3) {
                return valorIngresso = 880
            } else if (categoria === 4) {
                return valorIngresso = 330
            } else {
                console.log("Categoria inválida.")
            }

        } else {
        console.log("Etapa do jogo inválida!")
        }
    } else if (tipoJogo === "IN") {
        if (etapaJogo === "SF") {
            if(categoria === 1) {
                return valorIngresso = 1320 * 4.1
            } else if (categoria === 2) {
                return valorIngresso = 880 *4.1
            } else if (categoria === 3) {
                return valorIngresso = 550 * 4.1
            } else if (categoria === 4) {
                return valorIngresso = 220 * 4.1
            } else {
                console.log("Categoria inválida.")
            }
    
        } else if (etapaJogo === "DT") {
            if(categoria === 1) {
                return valorIngresso = 660 * 4.1
            } else if (categoria === 2) {
                return valorIngresso = 440 * 4.1
            } else if (categoria === 3) {
                return valorIngresso = 330 * 4.1
            } else if (categoria === 4) {
                return valorIngresso = 170 * 4.1
            } else {
                console.log("Categoria inválida.")
            }

        } else if (etapaJogo === "FI") {
            if(categoria === 1) {
                return valorIngresso = 1980 * 4.1
            } else if (categoria === 2) {
                return valorIngresso = 1320 * 4.1
            } else if (categoria === 3) {
                return valorIngresso = 880 * 4.1
            } else if (categoria === 4) {
                return valorIngresso = 330 * 4.1
            } else {
                console.log("Categoria inválida.")
            }
        } else {
        console.log("Etapa do jogo inválida!")
        }
    } else {
        console.log("Tipo de jogo não encontrado")
    }
    return valorIngresso
}

const dadosTicket = {
    nome: nomeEspectador,
    tipoDeJogo: tipoJogo,
    etapaDoJogo: etapaJogo,
    categoria: categoria,
    ingressos: ingressos
}

const imprimirTicket = 
`---Dados da compra--- 
Nome do cliente:  ${dadosTicket.nome}
Tipo do jogo:  ${dadosTicket.tipoDeJogo} 
Etapa do jogo:  ${dadosTicket.etapaDoJogo}
Categoria:  ${dadosTicket.categoria}
Quantidade de Ingressos:  ${dadosTicket.ingressos}
---Valores--- 
Valor do ingresso:  ${ticket()}
Valor total:  ${ticket() * dadosTicket.ingressos}`

console.log(imprimirTicket) 