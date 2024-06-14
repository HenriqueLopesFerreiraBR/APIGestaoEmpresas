const Ordem = require("../models/Ordem");

class OrdemController {
    async create(req, res) {
        try {
            const { dataOrdem, valorTotal, fornecedor_id, } = req.body;
            const novoOrdem = await Ordem.create({
                dataOrdem,
                valorTotal,
                fornecedor_id,
                
            });
            res.status(201).json(novoOrdem);
        } catch (error) {
            console.error("Erro ao criar Ordem:", error);
            res.status(500).json({ message: "Erro ao criar Ordem", error });
        }
    }

    async getAll(req, res) {
        try {
            const Ordens = await Ordem.findAll();
            res.status(200).json(Ordens);
        } catch (error) {
            console.error("Erro ao obter Ordens:", error);
            res.status(500).json({ message: "Erro ao obter Ordens", error });
        }
    }

    async getById(req, res) {
        try {
            const id = req.params.id;

            const Ordem = await Ordem.findByPk(id);
            res.status(200).json(Ordem);
        } catch (error) {
            console.error("Erro ao obter Ordens:", error);
            res.status(500).json({ message: "Erro ao obter Ordens", error });
        }
    }
    async getBydataOrdem(req, res) {
        try {
            const dataOrdem = req.body.dataOrdem;

            const Ordem = await Ordem.findOne({ where: { dataOrdem: dataOrdem } });
            res.status(200).json(Ordem);
        } catch (error) {
            console.error("Erro ao obter Ordens:", error);
            res.status(500).json({ message: "Erro ao obter Ordens", error });
        }
    }
    async getByvalorTotal(req, res) {
        try {
            const valorTotal = req.body.valorTotal;

            const Ordem = await Ordem.findOne({ where: { valorTotal: valorTotal } });
            res.status(200).json(Ordem);
        } catch (error) {
            console.error("Erro ao obter Ordens:", error);
            res.status(500).json({ message: "Erro ao obter Ordens", error });
        }
    }

    async update(req, res) {
        const { dataOrdem, valorTotal, fornecedor_id, } = req.body;
        const id = req.params.id;
        try {
            const Ordem = await Ordem.findByPk(id);

            if (!Ordem) {
                return res.status(404).json({ error: "Client not found" });
            }

            const OrdemUpdated = {
                dataOrdem: dataOrdem,
                valorTotal: valorTotal,
                fornecedor_id: fornecedor_id,
                 
            };

            const updated = await Ordem.update(OrdemUpdated, {
                where: {
                    id: id,
                },
            });

            res.status(200).json({
                message: "Ordem atualizado com sucesso",
                OrdemUpdated,
            });
        } catch (error) {
            console.error("Erro ao obter Ordens:", error);
            res.status(500).json({ message: "Erro ao obter Ordens", error });
        }
    }

    async delete(req, res) {
        try {
            const id = req.params.id;

            const Ordem = await Ordem.findOne({ where: { id: id } });
            if (!Ordem) {
                res.status(433).json("Ordem não cadastrado");
            }

            const deleted = await Ordem.destroy({
                where: { id: id },
            });

            res.status(200).json(
                `Ordem ${Ordem.dataOrdem} deletado com sucesso`
            );
        } catch (error) {
            console.error("Erro ao obter Ordens:", error);
            res.status(500).json({ message: "Erro ao obter Ordens", error });
        }
    }
}

module.exports = new OrdemController();
