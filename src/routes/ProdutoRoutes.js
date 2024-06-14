const ProdutoController = require("../controllers/ProdutoController");
const express = require("express");
const router = express.Router();

// Rota para criar uma novo produto
router.post("/", ProdutoController.create);

// Rota para obter todas as produtos
router.get("/", ProdutoController.getAll);

//Rota para obter produtos
router.get("/:id", ProdutoController.getById);

//Rota para atualizar produto
router.put("/:id", ProdutoController.update);

//Rota para deletar produto
router.delete("/:id", ProdutoController.delete);

module.exports = router;
