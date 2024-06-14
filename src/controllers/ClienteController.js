const Cliente = require("../models/Cliente");

class ClienteController {
    async create(req, res) {
        try {
            const { nome, email, telefone, endereco } = req.body;
            const novoCliente = await Cliente.create({
                nome,
                email,
                telefone,
                endereco,
            });
            res.status(201).json(novoCliente);
        } catch (error) {
            console.error("Erro ao criar Cliente:", error);
            res.status(500).json({ message: "Erro ao criar Cliente", error });
        }
    }

    async getAll(req, res) {
        try {
            const Clientes = await Cliente.findAll();
            res.status(200).json(Clientes);
        } catch (error) {
            console.error("Erro ao obter Clientes:", error);
            res.status(500).json({ message: "Erro ao obter Clientes", error });
        }
    }

    async getById(req, res) {
        try {
            const id = req.params.id;

            const cliente = await Cliente.findByPk(id);
            res.status(200).json(cliente);
        } catch (error) {
            console.error("Erro ao obter Clientes:", error);
            res.status(500).json({ message: "Erro ao obter Clientes", error });
        }
    }
    async getByNome(req, res) {
        try {
            const nome = req.body.nome;

            const cliente = await Cliente.findOne({ where: { nome: nome } });
            res.status(200).json(cliente);
        } catch (error) {
            console.error("Erro ao obter Clientes:", error);
            res.status(500).json({ message: "Erro ao obter Clientes", error });
        }
    }
    async getByEmail(req, res) {
        try {
            const email = req.body.email;

            const cliente = await Cliente.findOne({ where: { email: email } });
            res.status(200).json(cliente);
        } catch (error) {
            console.error("Erro ao obter Clientes:", error);
            res.status(500).json({ message: "Erro ao obter Clientes", error });
        }
    }

    async update(req, res) {
        const { nome, email, telefone, endereco } = req.body;
        const id = req.params.id;
        try {
            const cliente = await Cliente.findByPk(id);

            if (!cliente) {
                return res.status(404).json({ error: "Client not found" });
            }

            const clienteUpdated = {
                nome: nome,
                email: email,
                telefone: telefone,
                endereco: endereco,
            };

            const updated = await Cliente.update(clienteUpdated, {
                where: {
                    id: id,
                },
            });

            res.status(200).json({
                message: "Cliente atualizado com sucesso",
                clienteUpdated,
            });
        } catch (error) {
            console.error("Erro ao obter Clientes:", error);
            res.status(500).json({ message: "Erro ao obter Clientes", error });
        }
    }

    async delete(req, res) {
        try {
            const id = req.params.id;

            const cliente = await Cliente.findOne({ where: { id: id } });
            if (!cliente) {
                res.status(433).json("Cliente não cadastrado");
            }

            const deleted = await Cliente.destroy({
                where: { id: id },
            });

            res.status(200).json(
                `Cliente ${cliente.nome} deletado com sucesso`
            );
        } catch (error) {
            console.error("Erro ao obter Clientes:", error);
            res.status(500).json({ message: "Erro ao obter Clientes", error });
        }
    }
}

module.exports = new ClienteController();
