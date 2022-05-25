// Fichero src/index.js

// Importamos los dos módulos de NPM necesarios para trabajar
const express = require("express");
const cors = require("cors");
const DataBase = require("better-sqlite3");
const { v4: uuidv4 } = require("uuid");

// Base de datos
const db = new DataBase("./src/data/dataCard.db", {
  // con verbose le decimos que muestre en la consola todas las queries que se ejecuten
  verbose: console.log,
  // así podemos comprobar qué queries estamos haciendo en todo momento
});
// Creamos el servidor
const server = express();

// Configuramos el servidor
server.use(cors());
server.use(
  express.json({
    limit: "10mb",
  })
);

server.set("view engine", "ejs");

const savedCards = [];

// Arrancamos el servidor en el puerto 3000
const serverPort = process.env.PORT || 4000;
server.listen(serverPort, () => {
  console.log(`Server listening at http://localhost:${serverPort}`);
});

server.post("/card", (req, res) => {
  if (
    req.body.name !== "" &&
    req.body.email !== "" &&
    req.body.job !== "" &&
    req.body.phone !== "" &&
    req.body.github !== "" &&
    req.body.linkedin !== "" &&
    req.body.photo !== ""
  ) {
    const newCard = {
      ...req.body,
      id: uuidv4(),
    };
    const query = db.prepare("INSERT INTO userCard(palette, name, job, photo, phone, email, linkedin, github, uuid) VALUES (?,?,?,?,?,?,?,?,?)");
    const result = query.run(
      newCard.palette,
      newCard.name,
      newCard.job,
      newCard.photo,
      newCard.phone,
      newCard.email,
      newCard.linkedin,
      newCard.github,
      newCard.id
    );
    const responseSucess = {
      success: true,
      cardURL: `https://module-4-team-8.herokuapp.com/card/${newCard.id}`,
    };
    res.json(responseSucess);
  } else {
    const responseError = {
      success: false,
      error: "Faltan parámetros",
    };
    res.json(responseError);
  }
});

server.get("/card/:id", (req, res) => {
  const query = db.prepare('SELECT * FROM userCard WHERE uuid = ?');
  const userCard = query.get(req.params.id);
  if (userCard !== undefined) {
    res.render("card", userCard);
  }
});


// Servidores de estáticos
const staticServerPathWeb = "./src/public-react"; // En esta carpeta ponemos los ficheros estáticos
server.use(express.static(staticServerPathWeb));

const staticServerPublicCss = "./src/public-css"; // En esta carpeta ponemos los ficheros estáticos
server.use(express.static(staticServerPublicCss));