//INTERPRETAÇÃO
/*Exercício1 
Será impresso um objeto do array de cada vez

Exercício 2
Será impresso um novo array com os nomes descrito em cada objeto doarray original

Exercício 3
Será impresso os objetos que não contém "Chijo" em seus elementos.
*/

//ESCRITA
//Exercício 1
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]

//a. 
const nomesPets = pets.map((objeto) => {
     return objeto.nome
})
console.log(nomesPets)

//b.
const salsichas = pets.filter((objeto) => {
    return objeto.raca === "Salsicha"
})
console.log(salsichas)

//c.
// const descontoPoodles = pets.map ((poddle) => {
//     return poddle.raca === "Poodle"
// }). filter ((poodle) => {
//     return `Você ganhou um cupom de 10% para tosar o / a ${poodle.nome}`
// })
// console.log (descontoPoodles)


//Exercício 2
const produtos = [
    { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
    { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
    { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
    { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
    { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
    { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
    { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
    { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
    { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
    { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
 ]

 //a.
 const nomeItens = produtos.map((item) => {
     return item.nome
 })
console.log(nomeItens)

//b. 


