const express = require("express");
const servidor = express();
var cors = require("cors");
const path = require('path');
const port = 3535;
const indexRouter = require("./indexController");

servidor.use(cors());

servidor.use("/", indexRouter);

servidor.listen(port, () => {
  console.log(`Example servidor listening at http://localhost:${port}`);
});

module.exports = servidor;
