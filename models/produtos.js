let mongoose = require("mongoose")

const model = mongoose.Schema({
    Usuario: String,
    Data_validade: Date,
    
})

const produtos = mongoose.model("produtos", model)


module.exports = produtos