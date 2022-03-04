/*Crie um função que receba uma string com o nome e outra string com uma 
data de nascimento (ex.: “24/04/1993”). A função deve separar o dia, o mês
 e ano e retornar uma string no seguinte formato: */

 function infos (nome: string, data:string): string {
    const dataSeparada = data.split("/")
    const dia = dataSeparada[0]
    const mes = dataSeparada[1]
    const ano = dataSeparada[2]

    const saudacoes = `Olá me chamo ${nome}, nasci no dia ${dia} do mês de ${mes} do ano de ${ano}`
    return saudacoes
 }