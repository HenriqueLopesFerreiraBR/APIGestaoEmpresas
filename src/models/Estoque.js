const { STRING, INTEGER, DOUBLE, DATE, ENUM } = require('sequelize');
const {sequelize} = require('../database/db');
const Cliente = require('./Cliente')


const Estoque = sequelize.define('Estoque',{
    id:{
        type:INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    tipoMovimento:{
        type:ENUM
    },
    dataMovimento:{
        type:DATE
    },
    quantidade:{
        type:INTEGER
    },
    produto_id :{
        type:INTEGER,
        
    },
})

// PedidoVenda.hasOne(Cliente)
// Estoque.sync({force:true})

module.exports = Estoque