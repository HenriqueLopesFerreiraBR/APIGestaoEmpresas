const { STRING, INTEGER } = require('sequelize');
const {sequelize} = require('../database/db');


const Cliente = sequelize.define('Clientes',{
    id:{
        type:INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    nome:{
        type:STRING
    },
    email:{
        type:STRING
    },
    telefone:{
        type:STRING
    },
    endereco:{
        type: STRING
    }
})

//Cliente.sync({force:true})

module.exports = Cliente