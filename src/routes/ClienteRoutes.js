const ClienteController = require("../controllers/ClienteController");
const express = require("express");
const router = express.Router();

// Rota para criar uma novo cliente
router.post("/", ClienteController.create);

// Rota para obter todas as Clientes
router.get("/", ClienteController.getAll);

//Rota para obter clientes
router.get("/:id", ClienteController.getById);

//Rota para atualizar Cliente
router.put("/:id", ClienteController.update);

//Rota para deletar cliente
router.delete("/:id", ClienteController.delete);

module.exports = router;
