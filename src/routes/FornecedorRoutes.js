const FornecedorController = require("../controllers/FornecedorController");
const express = require("express");
const router = express.Router();

// Rota para criar uma novo fornecedor
router.post("/", FornecedorController.create);

// Rota para obter todas as fornecedores
router.get("/", FornecedorController.getAll);

//Rota para obter fornecedores
router.get("/:id", FornecedorController.getById);

//Rota para atualizar fornecedor
router.put("/:id", FornecedorController.update);

//Rota para deletar fornecedor
router.delete("/:id", FornecedorController.delete);

module.exports = router;
