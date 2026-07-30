const pool = require("../config/db");
const express = require("express");
const router = express.Router();

// Cria rota de teste (http://localhost:3050/auth/teste)
router.get("/teste", async (req, res) => {
  try {
    const exists = await pool.query(`SELECT version();`);

    console.log(exists);
    res.status(201).json({ mensagem: exists });
  } catch (err) {
    console.error("Erro: ", err);
    res.status(500).json({
      erro: "Falha ao executar",
    });
  }
});

// Cria rota de para exibir usuarios (http://localhost:3050/auth/users)
router.get("/users", async (req, res) => {
  try {
    const users = await pool.query(
      `SELECT nome, sobrenome, email, contato, aniversario, cpf, foto FROM users WHERE ativo = true;`,
    );

    console.log(users.rows);
    res.status(201).json({ mensagem: users.rows });
  } catch (err) {
    console.error("Erro: ", err);
    res.status(500).json({
      erro: "Falha ao executar",
    });
  }
});

module.exports = router;
