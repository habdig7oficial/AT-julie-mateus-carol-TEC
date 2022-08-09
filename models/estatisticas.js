let mongoose = require("mongoose")

const model = mongoose.Schema({
    cadastrado: Number,
    vencidos: Number,
    consumidos: Number,
    status:{type: Number, default:0}
})

const estatisticas = mongoose.model("infos", model)


module.exports = estatisticas