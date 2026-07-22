const pool = require("../config/db");
const express = require("express");
const router = express.Router();

// Cria rota de testr (http://localhost:3000/auth/teste)
router.post("/teste", async (req, res) => {
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

module.exports = router;
