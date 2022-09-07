// modules e require
const express = require("express");//importa modulo express para dentro do arquivo
const app = express();//instanciando, deixando disponivel as funcionadades

const cors = require("cors")
app.use(cors());

express.json()

module.exports = app;//exporta express para todo o projeto