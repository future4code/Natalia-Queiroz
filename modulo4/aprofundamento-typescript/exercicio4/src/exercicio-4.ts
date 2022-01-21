type pokemon = {
	name: string,
  types: string,
	healthPoints: number
}

const pokemon1: pokemon = {
  name: "Charmander",
  types: "Fire",
  healthPoints: 28
}

const pokemon2: pokemon = {
  name: "Bulbasaur",
  types: "Grass/Poison",
  healthPoints: 31
}

const pokemon3: pokemon = {
  name: "Squirtle",
  types: "Water",
  healthPoints: 35
}

// b) No terminal eu escreveria o seguinte codigo: tsc exercicio-.ts
// c) Não.
// d) Sim. Colocar os nomes dos aquivos que deseja transpilar apos o comando tsc separados por espaço
