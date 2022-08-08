let mongoose = require("mongoose")

const model = mongoose.Schema({
    cadastrado: Number,
    vencidos: Number,
    consumidos: Number
})

const estatisticas = mongoose.model("infos", model)


module.exports = estatisticas