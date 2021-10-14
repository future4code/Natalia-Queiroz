//INTERPRETAÇÃO
/*Exercício 1
o código irá gerar resultados para valor, começando em zero até que o valor de i seja 5. Quando i for 5, o codigo não irá rodar. Será impresso no console todos esse valores.

Exercício 2
a. Todos os numeros dao array que forem maior que 18.
b.

Exercício 3
****
*/
//ESCRITA
//Exercício 1
const pets = Number(prompt("Quantos bichinhos de estimação você tem?"))
const meusPets = []

if(pets === 0){
    console.log("Que pena! Você pode adotar um pet!")
    } else {
        for (let i = 1; i <= pets; i++) {
        const nomePets = prompt("Escreva o nome do pet")
        meusPets.push(nomePets)
    }
    console.log(meusPets)
}

//Exercício 2
const arrayOriginal = [100, 200, 300, 400, 500]

for (let i = 0; i <= arrayOriginal.length; i++) {
    let item = arrayOriginal[i]
    console.log(item)
}

for (let i = 0; i < arrayOriginal.length; i++) {
    let itemDividido = arrayOriginal[i] / 10
    console.log(itemDividido)
}

for (let i = 0; i < arrayOriginal.length + 1; i++) {
    let itemPar = arrayOriginal[i] % 10
    let arrayPar = []
        if (itemPar === 0){
            arrayPar.push(itemPar)
        }
    console.log(arrayPar)
}