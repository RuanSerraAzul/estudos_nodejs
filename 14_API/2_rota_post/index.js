const express = require("express");
const app = express();

app.use(
    express.urlencoded({
        extended: true,
    })
);

const routes = require("./routes/routes.js");

app.use(express.json());

//endpoint

app.get("/", (req, res) => {
    res.json({
        message: "Hello World, primeiro endpoint criado com sucesso",
    });
});

app.listen(3000);
