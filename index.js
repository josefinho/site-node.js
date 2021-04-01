const express = require("express");
const app = express();

// Referencia o template engine a ser usado.
app.set('view engine', 'ejs');
// Referencia o diretório dos arquivos estáticos a serem usados (HTML/CSS).
app.use(express.static("public"));

// Realiza uma requisição de 'GET'. O primeiro argumento é a rota e o segundo é um callback
// que irá retornar a resposta à requisição.
app.get("/", (req, res) => {
	// Renderiza o arquivo HTML/CSS chamado de index, no diretório padrão /view.
	res.render("index");
})

app.get("/perguntar", (req, res) => {
	res.render("perguntar.ejs");
});

// Abre o servidor na porta referenciada pelo primeiro argumento. O segundo argumento é um
// callback que avisa se algo deu errado.
app.listen (8080, (erro) => {
	if (erro)
		console.log ("Deu ruim");
	else
		console.log("Funfando");
});

