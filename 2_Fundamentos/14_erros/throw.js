const x = 10

//checar se é numero

if(!Number.isInteger(x)){
    throw new Error("X não é um dado do tipo inteiro.") //encerra o programa
}

console.log("Continuando o código...")