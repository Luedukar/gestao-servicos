const cors = require("cors");
const cookieParser = require("cookie-parser");
require("dotenv").config();
const express = require("express");
const { Pool } = require("pg");

const authRoutes = require("./routes/authRoutes");

// Inicializa a API
const app = express();

// Permite cookies
app.use(cookieParser());

// Permite que o front consiga acessar a API
app.use(
  cors({
    origin: "http://localhost:3000", // endereço do front
    credentials: true, // permite Cookies
  }),
);

app.use(express.json());

// Até o momento o enderoço do back é http://localhost:3050, isso permite acessar authRoutes por meio de http://localhost:3000/auth
app.use("/auth", authRoutes);

// Testa se está funcionando
app.get("/", (req, res) => {
  res.send("API rodando");
});

// Abre uma porta para receber requisições, nesta caso, porta 3000
app.listen(3050, () => {
  console.log("Servidor rodando em http://localhost:3050");
});
