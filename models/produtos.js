let mongoose = require("mongoose")

const model = mongoose.Schema({
    Usuario: String,
    Produto: String,
    Data_validade: Date,
    Alterado: {type: Boolean, default: false}

})

const produtos = mongoose.model("produtos", model)


module.exports = produtos