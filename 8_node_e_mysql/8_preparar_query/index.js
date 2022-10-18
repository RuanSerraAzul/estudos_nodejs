const express = require("express");
const exphbs = require("express-handlebars");
const pool = require("./db/conn");

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

    const insert = `INSERT INTO books (??, ??) VALUES (?, ?)`;
    const data = ["title", "page", title, pagesqty];

    pool.query(insert, data, (err) => {
        if (err) {
            console.log(err);
        }

        res.redirect("/books");
    });
});

app.get("/books", (req, res) => {
    const select = "SELECT * FROM books";

    pool.query(select, (err, data) => {
        if (err) {
            console.log(err);
        }

        const books = data;

        res.render("books", { books });
    });
});

app.get("/books/:id", (req, res) => {
    const id = req.params.id;

    const select = `SELECT * FROM books where ?? = ?`;
    const data = ["id", id];

    pool.query(select, data, (err, data) => {
        if (err) {
            console.log(err);
        }

        const book = data[0];

        res.render("book", { book });
    });
});

app.get("/books/edit/:id", (req, res) => {
    const id = req.params.id;

    const select = `SELECT * FROM books where ?? = ?`;
    const data = ["id", id];

    pool.query(select, data, (err, data) => {
        if (err) {
            console.log(err);
        }

        const book = data[0];

        res.render("editbook", { book });
    });
});

app.post("/books/updatebook", (req, res) => {
    const title = req.body.title;
    const pagesqty = req.body.pagesqty;
    const id = req.body.id;

    const edit = `UPDATE books SET ?? = ?, ?? = ? WHERE ?? = ?`;
    const data = ["title", title, "page", pagesqty, "id", id];

    pool.query(edit, data, (err, data) => {
        if (err) {
            console.log(err);
        }

        res.redirect(`/books`);
    });
});

app.post("/books/remove/:id", function (req, res) {
    const id = req.params.id;

    const query = `DELETE FROM books WHERE ?? = ?`;
    const data = ["id", id];

    pool.query(query, data, function (err) {
        if (err) {
            console.log(err);
        }

        res.redirect(`/books`);
    });
});

app.listen(3000, () => {
    console.log("Aplicação rodando na porta 3000");
});
