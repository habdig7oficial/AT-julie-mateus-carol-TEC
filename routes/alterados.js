const produtos = require("../models/produtos")

module.exports = function ( app ){
    app.post(`/alterados`, async function(req,res){

        try{
            let jwt = require("jsonwebtoken")
            let dados = req.body

            console.log(dados)

            console.log("end")


            let users = require("../models/users")
            let produtos = require("../models/produtos")

    
            let arr = dados.secret.split(",")

            console.log(dados.status)


            if (dados.status == 'on'){
                dados.status = 1
            } 
            else{
                dados.status = 0
            }

            console.log(dados.status)

            let consulta =  await users.findOne({email: arr[1]})

            //console.log(consulta)

            if(consulta){

                let id = await jwt.verify(arr[0], consulta.JWT);
    
                //return res.render(`application.ejs`, { consulta, query : query.data })

                //console.log(id.data)

               let value = dados.msg_id

               console.log(value)

                let alterar = await produtos.findOneAndUpdate({_id: value},{Produto: dados.alterar_produto ,Status: dados.status, Data_validade: dados.data, Alterado : true} )

                //console.log(alterar)

                let rc = "62f14cea9d304125958d293d"

                let estatisticas = require("../models/estatisticas")

                let previos = await estatisticas.findOne({_id: rc })

                //console.log(previos)

                let novo = await estatisticas.findOneAndUpdate({_id: rc}, {vencidos: previos.vencidos + 1})
            
                res.redirect(`/app?data=${arr[0]},${arr[1]}`)
                
                
            }

        }
        catch(err){
            console.log(err)
            return res.redirect("/err")
        }

        /*
        let produtos = require("../models/produtos")

        let gravar = await new produtos({
        Usuario: dados.email,
        dados
        }).save()

        res.send(dados)

        */
    })
}