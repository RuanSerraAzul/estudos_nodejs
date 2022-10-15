const express = require("express");
const router = express.Router();
const path = require("path");

const basePath = path.join(__dirname, "../templates");

router.get("/create", (req, res) => {
    res.sendFile(`${basePath}/userform.html`);
});

router.post("/save", (req, res) => {
    console.log(req.body);

    const name = req.body.name;
    const age = req.body.age;

    console.log(`o nome do usuario é ${name} e ele tem ${age}`);

    res.sendFile(`${basePath}/userform.html`);
});

router.get("/:id", (req, res) => {
    const id = req.params.id;

    console.log(`Estamos buscando pelo usuario ${id}`);
    res.sendFile(`${basePath}router.html`);
});

module.exports = router;
