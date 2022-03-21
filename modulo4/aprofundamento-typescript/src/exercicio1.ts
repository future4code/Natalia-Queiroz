//a) 
// const minhaString: string = 0
//é mostrado um erro dizendo que o tipo string não pode receber um valor number.

//b)
// const meuNumero: number = 10
//iserindo o operador lógico "ou" e atribuir uma segundo possibilidade de valor

//c)
// type Pessoa = {
//     nome: string, 
//     idade: number, 
//     corFavorita: string
// }

// const pessoa: Pessoa = {
//     nome: "Natália",
//     idade: 26,
//     corFavorita: "preto"
// }
// const pessoa2: Pessoa = {
//     nome: "Laura",
//     idade: 20,
//     corFavorita: "preto"
// }
// const pessoa3: Pessoa = {
//     nome: "Luís",
//     idade: 22,
//     corFavorita: "azul"
// }
// const pessoa4: Pessoa = {
//     nome: "Nayara",
//     idade: 34,
//     corFavorita: "vermelho"
// }

//d)
enum CorFavorita {
    VERMELHO = "vermelho",
    LARANJA = "laranja",
    AMARELO = "amarelo",
    VERDE = "verde",
    AZUL = "azul",
    VIOLETA = "VIOLETA"
}

type Pessoa = {
    nome: string, 
    idade: number, 
    corFavorita: CorFavorita
}

const pessoa: Pessoa = {
    nome: "Natália",
    idade: 26,
    corFavorita: CorFavorita.VIOLETA
}
const pessoa2: Pessoa = {
    nome: "Laura",
    idade: 20,
    corFavorita: CorFavorita.LARANJA
}
const pessoa3: Pessoa = {
    nome: "Luís",
    idade: 22,
    corFavorita: CorFavorita.AZUL
}
const pessoa4: Pessoa = {
    nome: "Nayara",
    idade: 34,
    corFavorita: CorFavorita.VERMELHO
}