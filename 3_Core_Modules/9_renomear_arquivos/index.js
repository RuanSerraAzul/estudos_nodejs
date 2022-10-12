const fs = require("fs");

const oldName = "arquivo.txt";

const newName = "novoarquivo.txt";

fs.rename(oldName, newName, function (err) {
    if (err) {
        console.log(err);
        return;
    }

    console.log(`O arquivo ${oldName} foi renomeado para ${newName}`);
});
