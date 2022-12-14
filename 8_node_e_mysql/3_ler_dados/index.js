const express = require("express");
const exphbs = require("express-handlebars");
const mysql = require("mysql");

const app = express();

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(express.json());
app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.use(express.static("public"));

app.get("/", (req, res) => {
    res.render("home");
});

app.post("/books/insertbook", (req, res) => {
    const title = req.body.title;
    const pagesqty = req.body.pagesqty;

    const insert = `INSERT INTO books (title,page) VALUES ('${title}', '${pagesqty}')`;

    conn.query(insert, (err) => {
        if (err) {
            console.log(err);
        }

        res.redirect("/books");
    });
});

app.get("/books", (req, res) => {
    const select = "SELECT * FROM books";

    conn.query(select, (err, data) => {
        if (err) {
            console.log(err);
        }

        const books = data;

        res.render("books", { books });
    });
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
