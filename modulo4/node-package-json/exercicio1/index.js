// 1
/* a) Como fazemos para acessar os parâmetros passados na linha de comando para o Node?
        Usando o process.argv[]*/

/* b) Crie um programa que receba seu nome e sua idade. Após receber estes valores, imprima 
no console uma mensagem que siga a seguinte estrutura: "Olá, (Nome)! Você tem (sua idade) anos."*/

const meuNome = process.argv[2]
const minhaIdade = Number(process.argv[3])

console.log(`Olá, ${meuNome}! Você tem ${minhaIdade} anos.`)

/* c) Altere o programa acima para que mostre também a sua idade daqui a sete anos.*/

console.log(`Olá, ${meuNome}! Você tem ${minhaIdade} anos. Em sete anos terei ${minhaIdade + 7}`)