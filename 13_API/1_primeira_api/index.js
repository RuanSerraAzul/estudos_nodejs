const express = require("express");
const app = express();

app.use(
    express.urlencoded({
        extended: true,
    })
);

app.use(express.json());

//endpoint

app.get("/", (req, res) => {});

app.listen(3000);
