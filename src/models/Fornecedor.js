const { STRING, INTEGER } = require('sequelize');
const {sequelize} = require('../database/db');


const Fornecedor = sequelize.define('Fornecedores',{
    id:{
        type:INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    nome:{
        type:STRING
    },
    contato:{
        type:STRING
    },

    Endereco:{
        type: STRING
    }
})

//Fornecedor.sync({force:true})

module.exports = Fornecedor