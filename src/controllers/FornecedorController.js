const Fornecedor = require("../models/Fornecedor");

class FornecedorController {
    async create(req, res) {
        try {
            const { nome, email, telefone, endereco } = req.body;
            const novoFornecedor = await Fornecedor.create({
                nome,
                email,
                telefone,
                endereco,
            });
            res.status(201).json(novoFornecedor);
        } catch (error) {
            console.error("Erro ao criar Fornecedor:", error);
            res.status(500).json({ message: "Erro ao criar Fornecedor", error });
        }
    }

    async getAll(req, res) {
        try {
            const fornecedores = await Fornecedor.findAll();
            res.status(200).json(fornecedores);
        } catch (error) {
            console.error("Erro ao obter Fornecedors:", error);
            res.status(500).json({ message: "Erro ao obter Fornecedors", error });
        }
    }

    async getById(req, res) {
        try {
            const id = req.params.id;

            const fornecedor = await Fornecedor.findByPk(id);
            res.status(200).json(fornecedor);
        } catch (error) {
            console.error("Erro ao obter Fornecedors:", error);
            res.status(500).json({ message: "Erro ao obter Fornecedors", error });
        }
    }
    async getByNome(req, res) {
        try {
            const nome = req.body.nome;

            const fornecedor = await Fornecedor.findOne({ where: { nome: nome } });
            res.status(200).json(fornecedor);
        } catch (error) {
            console.error("Erro ao obter Fornecedors:", error);
            res.status(500).json({ message: "Erro ao obter Fornecedors", error });
        }
    }
    async getByEmail(req, res) {
        try {
            const email = req.body.email;

            const fornecedor = await Fornecedor.findOne({ where: { email: email } });
            res.status(200).json(fornecedor);
        } catch (error) {
            console.error("Erro ao obter Fornecedors:", error);
            res.status(500).json({ message: "Erro ao obter Fornecedors", error });
        }
    }

    async update(req, res) {
        const { nome, email, telefone, endereco } = req.body;
        const id = req.params.id;
        try {
            const fornecedor = await Fornecedor.findByPk(id);

            if (!fornecedor) {
                return res.status(404).json({ error: "Client not found" });
            }

            const fornecedorUpdated = {
                nome: nome,
                email: email,
                telefone: telefone,
                endereco: endereco,
            };

            const updated = await Fornecedor.update(fornecedorUpdated, {
                where: {
                    id: id,
                },
            });

            res.status(200).json({
                message: "Fornecedor atualizado com sucesso",
                fornecedorUpdated,
            });
        } catch (error) {
            console.error("Erro ao obter Fornecedors:", error);
            res.status(500).json({ message: "Erro ao obter Fornecedors", error });
        }
    }

    async delete(req, res) {
        try {
            const id = req.params.id;

            const fornecedor = await Fornecedor.findOne({ where: { id: id } });
            if (!fornecedor) {
                res.status(433).json("Fornecedor não cadastrado");
            }

            const deleted = await Fornecedor.destroy({
                where: { id: id },
            });

            res.status(200).json(
                `Fornecedor ${Fornecedor.nome} deletado com sucesso`
            );
        } catch (error) {
            console.error("Erro ao obter Fornecedors:", error);
            res.status(500).json({ message: "Erro ao obter Fornecedors", error });
        }
    }
}

module.exports = new FornecedorController();
