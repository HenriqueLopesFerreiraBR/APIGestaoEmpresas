const Produto = require("../models/Produto");

class ProdutoController {
    async create(req, res) {
        try {
            const { nome, descricao, preco, endereco } = req.body;
            const novoProduto = await Produto.create({
                nome,
                descricao,
                preco,
                endereco,
            });
            res.status(201).json(novoProduto);
        } catch (error) {
            console.error("Erro ao criar Produto:", error);
            res.status(500).json({ message: "Erro ao criar Produto", error });
        }
    }

    async getAll(req, res) {
        try {
            const produtos = await Produto.findAll();
            res.status(200).json(produtos);
        } catch (error) {
            console.error("Erro ao obter Produtos:", error);
            res.status(500).json({ message: "Erro ao obter Produtos", error });
        }
    }

    async getById(req, res) {
        try {
            const id = req.params.id;

            const produto = await Produto.findByPk(id);
            res.status(200).json(produto);
        } catch (error) {
            console.error("Erro ao obter Produtos:", error);
            res.status(500).json({ message: "Erro ao obter Produtos", error });
        }
    }
    async getByNome(req, res) {
        try {
            const nome = req.body.nome;

            const produto = await Produto.findOne({ where: { nome: nome } });
            res.status(200).json(produto);
        } catch (error) {
            console.error("Erro ao obter Produtos:", error);
            res.status(500).json({ message: "Erro ao obter Produtos", error });
        }
    }
    async getBydescricao(req, res) {
        try {
            const descricao = req.body.descricao;

            const Produto = await Produto.findOne({ where: { descricao: descricao } });
            res.status(200).json(Produto);
        } catch (error) {
            console.error("Erro ao obter Produtos:", error);
            res.status(500).json({ message: "Erro ao obter Produtos", error });
        }
    }

    async update(req, res) {
        const { nome, descricao, preco, endereco } = req.body;
        const id = req.params.id;
        try {
            const produto = await Produto.findByPk(id);

            if (!produto) {
                return res.status(404).json({ error: "Client not found" });
            }

            const produtoUpdated = {
                nome: nome,
                descricao: descricao,
                preco: preco,
                endereco: endereco,
            };

            const updated = await Produto.update(ProdutoUpdated, {
                where: {
                    id: id,
                },
            });

            res.status(200).json({
                message: "Produto atualizado com sucesso",
                ProdutoUpdated,
            });
        } catch (error) {
            console.error("Erro ao obter Produtos:", error);
            res.status(500).json({ message: "Erro ao obter Produtos", error });
        }
    }

    async delete(req, res) {
        try {
            const id = req.params.id;

            const produto = await Produto.findOne({ where: { id: id } });
            if (!produto) {
                res.status(433).json("Produto não cadastrado");
            }

            const deleted = await Produto.destroy({
                where: { id: id },
            });

            res.status(200).json(
                `Produto ${produto.nome} deletado com sucesso`
            );
        } catch (error) {
            console.error("Erro ao obter Produtos:", error);
            res.status(500).json({ message: "Erro ao obter Produtos", error });
        }
    }
}

module.exports = new ProdutoController();
