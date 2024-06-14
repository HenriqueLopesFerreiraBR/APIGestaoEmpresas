const OrdemController = require("../controllers/OrdemController");
const express = require("express");
const router = express.Router();

// Rota para criar uma novo produto
router.post("/", OrdemController.create);

// Rota para obter todas as produtos
router.get("/", OrdemController.getAll);

//Rota para obter produtos
router.get("/:id", OrdemController.getById);

//Rota para atualizar produto
router.put("/:id", OrdemController.update);

//Rota para deletar produto
router.delete("/:id", OrdemController.delete);

module.exports = router;
