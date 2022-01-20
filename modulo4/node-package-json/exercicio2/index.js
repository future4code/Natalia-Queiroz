/* 2 - Crie uma aplicação Node que recebe uma string representando uma operação matemática e dois valores 
numéricos. O retorno deverá ser o resultado da operação selecionada utilizando os 2 valores fornecidos.*/

const operador = process.argv[2]
const num1 = Number(process.argv[3])
const num2 = Number(process.argv[4])

const resultado = (num1, num2) => {
    if (operador === "add") {
        return num1 + num2
    } else if (operador === "sub") {
        return num1 - num2
    } else if (operador === "mult") {
        return num1 * num2
    } else if (operador === "div") {
        return num1 / num2
    }
}

console.log(resultado(num1, num2))