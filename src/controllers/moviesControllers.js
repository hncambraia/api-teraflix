// gerenciar a requisição e a resposta
const axios = require("axios")
const movies = require("../models/movies.json");


const createMovie = (req, res) => {

    // requisição
    //acessar as informações do filme que vem da requisição
    //acessar o titulo
    //acessar o genero
    const requestTitle = req.body.title
    const requestGenre = req.body.genre

    //construir um novo objeto
    //as informações vindas da req
    //id gerar automatio
    //data automatica
    let novoFilme = {
        "id": Math.random().toString(32).substring(2, 6),
        "addedAt": new Date(),
        "title": requestTitle,
        "genre": requestGenre
    }

    console.log("BODY REQUISIÇÃO", novoFilme);

    if (!requestGenre && !requestTitle) {
        res.status(404).send({ "message": "Erro requisição vazia", "code": 404 });
    }
    //adicionar esse novo filme na lista

    movies.push(novoFilme);
    //resposta
    //enviar resposta
    res.status(201).send({ "message": "Filme Adicionado com sucesso", novoFilme });
}

// DEMANDA: Ver todos os filmes disponíveis
const getAll = (req, res) => {
    // console.log("REQUISIÇÃO", req);
    res.status(200).send(movies);
};


const updateMovie = (req, res) =>{
    //requisição
        //acessar o id do filme
            const requestId = req.params.id;
            const requestTitle = req.body.title
            const filmeEncontrado = movies.find(movie => movie.id == requestId)

            filmeEncontrado.title = requestTitle
            res.status(200).send(filmeEncontrado);
        //acessar o titulo 

        // com o id recuperar o objeto a ser localizado

        //atualiar campo do titulo

    //resposta
        //enviar a resposta
}
const getAllGhibliMovies = async (req, res) => {
    const response = await axios.get("https://ghibliapi.herokuapp.com/films");
    const data = response.data;

    res.status(200).send(data);
};

module.exports = {
    getAll,
    createMovie,
    updateMovie,
    getAllGhibliMovies
};
