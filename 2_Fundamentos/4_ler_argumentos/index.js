//nome

// console.log(process.argv) => exibe o array com algumas e informações sobre o projeto e no  terceiro indice o argumento digitado

const args = process.argv.slice(2); //armazena o terceiro index em uma variavel

const nome = args[0].split("=")[1]; //corta o argumento e busca o segundo indice do array criado

console.log(`O nome digitado foi ${nome}`);