const { STRING, INTEGER, DOUBLE } = require('sequelize');
const {sequelize} = require('../database/db');


const Produto = sequelize.define('Produtos',{
    id:{
        type:INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    nome:{
        type:STRING
    },
    descricao:{
        type:STRING
    },
    preco:{
        type: DOUBLE
    },
    endereco:{
        type: STRING
    }
})

//Produto.sync({force:true})

module.exports = Produto