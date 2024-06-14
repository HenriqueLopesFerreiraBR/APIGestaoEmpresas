const express = require("express");
const app = express();

//importação das rotas
const ClienteRoutes = require("./ClienteRoutes");
const FornecedorRoutes = require("./FornecedorRoutes");
const ProdutoRoutes = require("./ProdutoRoutes");
const PedidoRoutes = require("./PedidoRoutes");
const OrdemRoutes = require("./OrdemRoutes");

// Index
app.use("/cliente", ClienteRoutes);
app.use("/fornecedor", FornecedorRoutes);
app.use("/produto", ProdutoRoutes);
app.use("/pedido", PedidoRoutes);
app.use("/ordem", OrdemRoutes);

module.exports = app;
