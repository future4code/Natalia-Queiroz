/*Crie uma função que receba um parâmetro qualquer e que imprima no console 
o tipo da variável. */

const tipoDaVariavel = (variavel: any) => {
    console.log(typeof(variavel))
}

tipoDaVariavel(Number(process.argv[2]))
