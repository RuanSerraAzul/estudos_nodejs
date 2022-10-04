const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,

});

readline.question("Qual a sua linguagem preferida? ", (language) =>{
    if(language === "Python"){
        console.log("Legal, python também é minha linguagem preferida!");
        readline.close();
    } else if(language === "PHP"){
        console.log("O PHP está morto, vi num post do twitter.");
        readline.close();
    } else {
        console.log(`A minha linguagem preferida é ${language}`);
        readline.close();
    }
});