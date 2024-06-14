const { STRING, INTEGER, DOUBLE, DATE } = require('sequelize');
const {sequelize} = require('../database/db');
const Cliente = require('./Cliente')
const Produto = require('./Produto')


const PedidoVenda = sequelize.define('Pedidos',{
    id:{
        type:INTEGER,
        autoIncrement:true,
        primaryKey:true
    },

    dataPedido:{
        type:DATE
    },
    valorTotal:{
        type:DOUBLE
    },
})

PedidoVenda.hasOne(Cliente,{foreignKey: 'clienteId'})
PedidoVenda.hasMany(Produto,{foreignKey: 'produtoId'})
//PedidoVenda.sync({force:true})

module.exports = PedidoVenda