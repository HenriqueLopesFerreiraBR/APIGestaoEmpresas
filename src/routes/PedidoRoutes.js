const PedidoController = require("../controllers/PedidoController");
const express = require("express");
const router = express.Router();

// Rota para criar uma novo produto
router.post("/", PedidoController.create);

// Rota para obter todas as produtos
router.get("/", PedidoController.getAll);

//Rota para obter produtos
router.get("/:id", PedidoController.getById);

//Rota para atualizar produto
router.put("/:id", PedidoController.update);

//Rota para deletar produto
router.delete("/:id", PedidoController.delete);

module.exports = router;
