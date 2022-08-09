const produtos = require("../models/produtos")

module.exports = function ( app ){
    app.post(`/excluir`, async function(req,res){

        try{
            let jwt = require("jsonwebtoken")
            let dados = req.body

            let users = require("../models/users")
            let produtos = require("../models/produtos")

    
            let arr = dados.secret.split(",")

            let consulta =  await users.findOne({email: arr[1]})

            //console.log(consulta)

            if(consulta){

                let id = await jwt.verify(arr[0], consulta.JWT);
    
                //return res.render(`application.ejs`, { consulta, query : query.data })

                //console.log(id.data)

               let value = dados.msg_id

               console.log(value)

                let alterar = await produtos.findOneAndRemove({_id: value})

                console.log(alterar)
            
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