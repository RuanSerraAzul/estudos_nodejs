const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.get("/dashboard", (req, res) => {
    res.render("dashboard");
});

app.get("/", (req, res) => {
    const user = {
        name: "Ruan",
        surname: "Serra Azul",
        age: 19,
    };

    const palavra = "Perfume";

    const auth = false;

    res.render("home", { user: user, palavra, auth });
});

app.listen(3000, () => {
    console.log("Aplicação rodando na porta 3000");
});