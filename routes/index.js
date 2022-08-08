module.exports = function ( app ) {

    let estatisticas = require("../models/estatisticas")

    app.get("/", async function (req, res) {
        let consulta =  await estatisticas.findOne({_id:"62f14cea9d304125958d293d"})
        console.log(consulta)
        res.render("index.ejs", {cadastro:consulta.cadastrado ,vencidos:consulta.vencidos, consumidos: consulta.consumidos })

    })
}