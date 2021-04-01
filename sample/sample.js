const express = require("express");
const app = express();

// Indica o template engine a ser usado.
app.set("view engine", "ejs");

// Indica a pasta onde os arquivos estáticos estão.
app.use(express.static('public'));

// :nome e :lang indicam parâmetros que recebem dados a partir da url.
// Para ser opcional, usa-se '?'.
// Manda uma resposta para a rota ao receber uma requisição GET.
app.get("/:nome/:lang", (req, res) => {
    let nome = req.params.nome;
    let lang = req.params.lang;

    // manda um conjunto de valores para que o ejs possa exibir
    res.render("index", {
        nome: nome,
        lang: lang,
        experiencia: 10,
    });
});

// inicia o server
app.listen(8080, () => {
    console.log("INICIADO");
});