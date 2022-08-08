let mongoose = require("mongoose")

const model = mongoose.Schema({
    Nome: String,
    Email: String,
    Senha: String,
    data_de_cadastro: {type: Date,default: Date.now()}
})

const users = mongoose.model("users", model)


module.exports = users