/*Crie um função que receba uma string com o nome e outra string com uma 
data de nascimento (ex.: “24/04/1993”). A função deve separar o dia, o mês
 e ano e retornar uma string no seguinte formato: */

 function infos (nome: string, data:string): string {
    const [dia, mes, ano] = data.split("/")
    const saudacoes: string = `Olá me chamo ${nome}, nasci no dia ${dia} do mês de ${mes} do ano de ${ano}`
    return saudacoes
 }