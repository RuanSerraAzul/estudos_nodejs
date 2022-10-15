const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(express.json());

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

app.get("/users/create", (req, res) => {
    res.sendFile(`${basePath}/userform.html`);
});

app.post("/users/save", (req, res) => {
    console.log(req.body);

    const name = req.body.name;
    const age = req.body.age;

    console.log(`o nome do usuario é ${name} e ele tem ${age}`);

    res.sendFile(`${basePath}/userform.html`);
});

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
