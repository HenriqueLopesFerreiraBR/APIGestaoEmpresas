const { STRING, INTEGER, DOUBLE, DATE, ENUM } = require('sequelize');
const {sequelize} = require('../database/db');
const Cliente = require('./Cliente')


const Estoque = sequelize.define('Estoque',{
    id:{
        type:INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    tipoTransacao:{
        type:ENUM
    },
    dataTransacao:{
        type:DATE
    },
    valor:{
        type:DOUBLE
    },
    descricao :{
        type:STRING,
        
    },
})

// PedidoVenda.hasOne(Cliente)
// Estoque.sync({force:true})

module.exports = Estoque