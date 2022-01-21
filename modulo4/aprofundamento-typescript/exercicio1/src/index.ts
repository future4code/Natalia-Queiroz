/*
a) Crie uma variável **minhaString** do tipo `string` e atribua um valor a ela. Tente atribuir um 
número a esta variável. O que acontece?*/
    //  Acontece um erro, pois um valor number não pode ser atribuido a uma variável do tipo string
    //  const minhaString: string = 12

/*b) Crie uma variável **meuNumero** do tipo `number` e atribua um valor numérico. Como fazer para que essa 
variável também aceite strings? Ou seja, como criamos no typescript uma variável que aceite mais de um 
tipo de valor?*/
    //Quando for tipar a variável, colocar string ou number usando o operador lógico de ou (|) no lugar de number para que ela possa receber valores de 
    //do tipo number ou do tipo string
    // const meuNumero: number = 12


/*c) Agora crie um novo objeto. Este objeto é uma pessoa, e deve possuir três propriedades:

`nome`, que é uma string;

`idade`, que é um número;

`corFavorita`, que é uma string.*/

// const pessoa: {nome: string, idade: number, corFavorita: string} = {
//     nome: "",
//     idade: Number(),
//     corFavorita: ""
// }

/*Crie mais três objetos, que também precisam ter apenas os campos definidos acima. Crie um **tipo**
 `Pessoa` para garantir que todos os objetos tenham os mesmos campos.*/

//  type pessoa = {nome: string, idade: number, corFavorita: string}

//  const natalia: pessoa = {
//     nome: "Natália",
//     idade: 18,
//     corFavorita: "Black"
//  }
//  const mFernanda: pessoa = {
//     nome: "Maria Fernanda",
//     idade: 20,
//     corFavorita: "vermelho"
//  }
//  const laura: pessoa = {
//     nome: "Laura",
//     idade: 20,
//     corFavorita: "Black"
//  }


/*d) Modifique a propriedade `corFavorita` para que apenas seja possível escolher entre as cores do arco-íris.
 Utilize um `enum` para isso.*/

 enum CorFavorita {
     AZUL = "azul",
     ROXO = "roxo",
     VERMELHO = "vermelho",
     LARANJA = "laranja",
     VERDE = "verde",
     AMARELO = "amarelo"
 }

 type pessoa = {nome: string, idade: number, corFavorita: CorFavorita}

 const natalia: pessoa = {
    nome: "Natália",
    idade: 18,
    corFavorita: CorFavorita.ROXO
 }

 const mFernanda: pessoa = {
    nome: "Maria Fernanda",
    idade: 20,
    corFavorita: CorFavorita.VERMELHO
 }

 const laura: pessoa = {
    nome: "Laura",
    idade: 20,
    corFavorita: CorFavorita.AZUL
 }