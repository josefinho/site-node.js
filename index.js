const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const connection = require("./database/database");
const perguntaModel = require("./database/pergunta");

connection
	.authenticate()
	.then(() => {
		console.log("Database connected");
	})
	.catch((msgErro) => {
		console.log(msgErro);
	})

// Referencia o template engine a ser usado.
app.set('view engine', 'ejs');
// Referencia o diretório dos arquivos estáticos a serem usados (JS/CSS).
app.use(express.static("public"));

// Middlewares que fornecem alguns métodos e transformam dados enviados na requisição
// em json.
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Realiza uma requisição de 'GET'. O primeiro argumento é a rota e o segundo é um callback
// que irá retornar a resposta à requisição.
app.get("/", (req, res) => {
	// Renderiza o arquivo HTML/CSS chamado de index, no diretório padrão /view.
	res.render("index");
});

app.get("/perguntar", (req, res) => {
	res.render("perguntar.ejs");
});

app.post("/salvarpergunta", (req, res) => {
	let titulo = req.body.titulo;
	let desc = req.body.descricao;

	perguntaModel.create({
		titulo: titulo,
		descricao: desc,
	}).then(() => {
		res.redirect("/");
	});
});

// Abre o servidor na porta referenciada pelo primeiro argumento. O segundo argumento é um
// callback que avisa se algo deu errado.
app.listen (8080, (erro) => {
	if (erro)
		console.log ("Deu ruim");
	else
		console.log("Funfando");
});
