const express = require("express");
const exphbs = require("express-handlebars");

const app = express();

const hbs = exphbs.create({
    partialsDir: ["views/partials/"],
});

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

app.use(express.static("public"));

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

app.get("/blog", function (req, res) {
    const posts = [
        {
            title: "Aprender Node.js",
            category: "Javascript",
            body: "teste JS",
            comments: 4,
        },
        {
            title: "Aprender Python",
            category: "Python",
            body: "teste Python",
            comments: 2,
        },
        {
            title: "Aprender PHP",
            category: "PHP",
            body: "teste PHP",
            comments: 2,
        },
    ];

    res.render("blog", { posts });
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
