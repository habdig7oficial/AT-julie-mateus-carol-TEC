let mongoose = require("mongoose")

const model = mongoose.Schema({
    Usuario: String,
    Produto: String,
    Data_validade: Date,
    Status:{type: Number, default:0},
    Alterado: {type: Boolean, default: false}

})

/*
0 - ativo,
1 - consumido,
3 - vencido,
? - excluido
*/

const produtos = mongoose.model("produtos", model)


module.exports = produtos