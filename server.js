const app = require("./src/app")
const PORT = 8080;
console.log("OLA HELLO world")
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`)
})