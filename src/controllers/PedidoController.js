const Pedido = require("../models/PedidoVenda");

class PedidoController {
    async create(req, res) {
        try {
            const { dataPedido, valorTotal,  } = req.body;
            const novoPedido = await Pedido.create({
                dataPedido,
                valorTotal,
                
                
            });
            res.status(201).json(novoPedido);
        } catch (error) {
            console.error("Erro ao criar Pedido:", error);
            res.status(500).json({ message: "Erro ao criar Pedido", error });
        }
    }

    async getAll(req, res) {
        try {
            const pedidos = await Pedido.findAll();
            res.status(200).json(pedidos);
        } catch (error) {
            console.error("Erro ao obter pedidos:", error);
            res.status(500).json({ message: "Erro ao obter pedidos", error });
        }
    }

    async getById(req, res) {
        try {
            const id = req.params.id;

            const pedido = await Pedido.findByPk(id);
            res.status(200).json(pedido);
        } catch (error) {
            console.error("Erro ao obter pedidos:", error);
            res.status(500).json({ message: "Erro ao obter pedidos", error });
        }
    }
    async getBydataPedido(req, res) {
        try {
            const dataPedido = req.body.dataPedido;

            const pedido = await Pedido.findOne({ where: { dataPedido: dataPedido } });
            res.status(200).json(pedido);
        } catch (error) {
            console.error("Erro ao obter pedidos:", error);
            res.status(500).json({ message: "Erro ao obter pedidos", error });
        }
    }
    async getByvalorTotal(req, res) {
        try {
            const valorTotal = req.body.valorTotal;

            const pedido = await Pedido.findOne({ where: { valorTotal: valorTotal } });
            res.status(200).json(pedido);
        } catch (error) {
            console.error("Erro ao obter pedidos:", error);
            res.status(500).json({ message: "Erro ao obter pedidos", error });
        }
    }

    async update(req, res) {
        const { dataPedido, valorTotal,  } = req.body;
        const id = req.params.id;
        try {
            const pedido = await Pedido.findByPk(id);

            if (!pedido) {
                return res.status(404).json({ error: "Client not found" });
            }

            const PedidoUpdated = {
                dataPedido: dataPedido,
                valorTotal: valorTotal,
                 
                 
            };

            const updated = await Pedido.update(PedidoUpdated, {
                where: {
                    id: id,
                },
            });

            res.status(200).json({
                message: "Pedido atualizado com sucesso",
                PedidoUpdated,
            });
        } catch (error) {
            console.error("Erro ao obter pedidos:", error);
            res.status(500).json({ message: "Erro ao obter pedidos", error });
        }
    }

    async delete(req, res) {
        try {
            const id = req.params.id;

            const pedido = await Pedido.findOne({ where: { id: id } });
            if (!pedido) {
                res.status(433).json("Pedido não cadastrado");
            }

            const deleted = await Pedido.destroy({
                where: { id: id },
            });

            res.status(200).json(
                `Pedido ${pedido.dataPedido} deletado com sucesso`
            );
        } catch (error) {
            console.error("Erro ao obter pedidos:", error);
            res.status(500).json({ message: "Erro ao obter pedidos", error });
        }
    }
}

module.exports = new PedidoController();
