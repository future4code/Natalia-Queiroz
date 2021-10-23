// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  const alturaRetangulo = Number(prompt("Qual a altura do retângulo que deseja calcular a área?"))
  const larguraRetangulo = Number(prompt("Qual a largura?"))
  console.log(alturaRetangulo * larguraRetangulo)
}

// EXERCÍCIO 02
function imprimeIdade() {
  const anoAtual = Number(prompt("Em que ano estamos?"))
  const nascimento = Number(prompt("Em que ano você nasceu?"))
  console.log(anoAtual - nascimento)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  return peso / (altura * altura)
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  const nome = prompt("Digite seu nome")
  const idade = prompt("Digite sua idade")
  const email = prompt("Digite seu melhor e-mail")
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  const cor1 = prompt("Qual a sua cor favorita?")
  const cor2 = prompt("Agora, me diz outra cor preferida")
  const cor3 = prompt("Me fale só mais uma cor")
  console.log([cor1, cor2, cor3])

}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  return array[array.length - 1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  const primeiroIndice = array[0]
  const ultimoIndice = array[array.length - 1]
  array[array.length - 1] = primeiroIndice
  array[0] = ultimoIndice
  return array
}

// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  const novaString1 = string1.toLowerCase()
  const novaString2 = string2.toLowerCase()
  return novaString1 === novaString2
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  const anoAtual = Number(prompt("Em que ano estamos?"))
  const anoNascimento = Number(prompt("Em que ano nasceu?"))
  const anoEmissao = Number(prompt("Em que ano sua carteira de identidade foi emitida?"))

  const condicao1 = (anoAtual - anoNascimento) <= 20 && (anoAtual - anoEmissao) >= 5
  const condicao2 = (anoAtual - anoNascimento) > 20 && (anoAtual - anoNascimento) <= 50 && (anoAtual - anoEmissao) >= 10
  const condicao3 = (anoAtual - anoNascimento) > 50 && (anoAtual - anoEmissao) >= 15 

  console.log(condicao1 || condicao2 || condicao3)
}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  const primeiraCondicao = (ano % 400) === 0
  const segundaCondicao = (ano % 4) === 0 
  const terceiraCondicao = (ano % 100) === 0 

  return primeiraCondicao || (segundaCondicao && !terceiraCondicao)
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  const deMaior = prompt("Responda SIM ou NAO: Você tem mais de 18 anos?")
  const escolaridade = prompt("Responda SIM ou NAO: Você possui ensino médio completo?")
  const disponibilidade = prompt("Responda SIM ou NAO: Você possui disponibilidade exclusiva durante os horários do curso?")
  
  const item1 = deMaior.toUpperCase()
  const item2 = escolaridade.toUpperCase()
  const item3 = disponibilidade.toUpperCase()

  console.log(item1 === "SIM" && item2 === "SIM" && item3 === "SIM")
}