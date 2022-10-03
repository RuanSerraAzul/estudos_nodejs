// mais de um valor
const x = 10;
const y = "Texto teste";
const z = [1,2];

console.log(x,y,z)

//contagem de impressões
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)
console.count(`O valor de x é: ${x}, contagem`)

//variavel entre string
console.log("O texto na variável é: %s", y)

//limpar o console
setTimeout(() =>{
    console.clear();
},2000);