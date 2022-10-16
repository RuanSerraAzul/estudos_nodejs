const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");

app.get("/dashboard", (req, res) => {
    const items = ["Item a", "Item b", "Item c"];
    res.render("dashboard", { items });
});

app.get("/post", (req, res) => {
    const post = {
        title: "Aprender Node.js",
        category: "Javascript",
        body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed quis sodales erat, sit amet dapibus neque. Integer a fermentum tellus. Pellentesque fermentum mauris at quam ullamcorper, in accumsan libero placerat.",
        comments: 4,
    };

    res.render("blogpost", { post });
});
app.get("/", (req, res) => {
    const user = {
        name: "Ruan",
        surname: "Serra Azul",
        age: 19,
    };

    const palavra = "Perfume";

    const auth = false;

    const approved = false;

    res.render("home", { user: user, palavra, auth, approved });
});

app.listen(3000, () => {
    console.log("Aplicação rodando na porta 3000");
});
