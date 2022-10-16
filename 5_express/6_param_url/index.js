const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

const basePath = path.join(__dirname, "templates");

const checkAuth = function (req, res, next) {
    req.authStatus = true;

    if (req.authStatus) {
        console.log(`Está logado, pode continuar`);
        next();
    } else {
        console.log(`Não está logado, faça o login para continuar`);
        next();
    }
};

app.use(checkAuth);

app.get("/users/:id", (req, res) => {
    const id = req.params.id;

    console.log(`Estamos buscando pelo usuario ${id}`);
    res.sendFile(`${basePath}/users.html`);
});

app.get("/", (req, res) => {
    res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
    console.log(`Aplicação rodando na porta ${port}`);
});