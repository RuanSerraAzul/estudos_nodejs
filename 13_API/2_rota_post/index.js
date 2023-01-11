const express = require("express");
const app = express();

app.use(
    express.urlencoded({
        extended: true,
    })
);

const routes = require("./routes/routes.js");

app.use(express.json());

app.use(routes);

app.listen(3000);
