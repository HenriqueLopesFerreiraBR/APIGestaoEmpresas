const { STRING, INTEGER, DOUBLE, DATE } = require('sequelize');
const {sequelize} = require('../database/db');
const Cliente = require('./Cliente')
const PedidoVenda = require('./PedidoVenda')


const Ordem = sequelize.define('Ordens',{
    id:{
        type:INTEGER,
        autoIncrement:true,
        primaryKey:true
    },
    dataOrdem:{
        type:DATE
    },
    valorTotal:{
        type:DOUBLE
    },
    fornecedor_id :{
        type:INTEGER,
        
    },
})

// Ordem.hasOne(Cliente)
Ordem.hasMany(PedidoVenda,{ foreignKey: 'ordenId' }) 
// Ordem.sync({force:true})

module.exports = Ordem