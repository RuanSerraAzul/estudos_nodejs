const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require("mysql");

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("home");
});

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Ruan@123",
    database: "nodemysql",
});

conn.connect(function (err) {
    if (err) {
        console.log(err);
    } else {
        console.log("Conectado ao banco de dados com sucesso");
    }

    app.listen(3000, () => {
        console.log("Aplicação rodando na porta 3000");
    });
});
