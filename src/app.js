// MODULES E REQUIRE
const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());

app.use(express.json());

// definir a rota principal do nosso projeto

const moviesRoutes = require("../src/routes/moviesRoutes");

app.use("/movies", moviesRoutes);

module.exports = app;
