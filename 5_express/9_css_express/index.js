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

app.use(express.static("public"));

const basePath = path.join(__dirname, "templates");

const users = require("./users");

app.use("/users", users);

app.get("/", (req, res) => {
    res.sendFile(`${basePath}/index.html`);
});

app.listen(port, () => {
    console.log(`Aplicação rodando na porta ${port}`);
});
