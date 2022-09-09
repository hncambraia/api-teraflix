// responsável por organizar as rotas do projeto
const express = require("express");
const router = express.Router();

const controllers = require("../controllers/moviesControllers");

console.log(controllers);

router.get("/all", controllers.getAll);
router.get("/ghibli", controllers.getAllGhibliMovies);
router.post("/create", controllers.createMovie);
router.patch("/update/:id", controllers.updateMovie);

module.exports = router;
