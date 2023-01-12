const express = require("express");

const router = express.Router();

const Controller = require("../controllers/Controller");

router.get("/", Controller.index);
router.post("/createproduct", Controller.postProduct);

module.exports = router;
