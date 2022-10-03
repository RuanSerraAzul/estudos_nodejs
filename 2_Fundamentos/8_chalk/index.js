const chalk = require('chalk');

const nota = 10;

if(nota>=6 && nota<=10){
    console.log(chalk.green.bold.bgWhite("Parabens você passou!!"))
} else if (nota>10 || nota<0){
    console.log(chalk.yellowBright.bold.bgWhite("Erro, a nota deve ser um valor de 0 a 10"))
}else{
    console.log(chalk.red.bold.bgWhite("VocÊ precisará fazer a prova de recureação."))
}

