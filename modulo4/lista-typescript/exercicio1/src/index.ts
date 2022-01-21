
// Crie um função que receba uma string com o nome e outra string com uma
// data de nascimento (ex.: “24/04/1993”). A função deve separar o dia, o 
// mês e ano e retornar uma string no seguinte 

// "Olá me chamo {NOME}, nasci no dia {DIA} do mês de {MÊS} do ano de {ANO}"

const frase = (nome: string, data: string) => {

    const nomeUsuario: string = nome
    const dataNascimento: string = data

    const stringDividida: string[] = dataNascimento.split("/", 3)

    console.log(`Olá me chamo ${nomeUsuario}, nasci no dia ${stringDividida[0]} do mês de ${stringDividida[1]} do ano de ${stringDividida[2]}`)
}

frase(process.argv[2], process.argv[3])