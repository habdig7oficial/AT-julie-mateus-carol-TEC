module.exports = function (app){

    let produtos = require("../models/produtos")

    app.get("/app", async function(req,res){

        //console.log(arr)

        let jwt = require("jsonwebtoken")
    
        try{

            let query = req.query
        
            let users = require("../models/users")
    
            let arr = query.data.split(",")

            let consulta =  await users.findOne({email: arr[1]})

            console.log(consulta)

            if(consulta){

                let id = jwt.verify(arr[0], consulta.JWT);
                console.log(query)

                let read = await produtos.find({Email : arr[1]},)

                console.log(read)
    
                return res.render(`application.ejs`, { consulta, query : query.data, read })
                
            }
    
        }

        catch{
            return res.redirect("/err")
        }


    
        





        //return res.render(`application.ejs`,dados )
    })


    app.post(`/produtos`, async function(req,res){


        try{
            let jwt = require("jsonwebtoken")
            let dados = req.body

            let users = require("../models/users")
    
            let arr = dados.secret.split(",")

            let consulta =  await users.findOne({email: arr[1]})

            console.log(consulta)

            if(consulta){

                let id = jwt.verify(arr[0], consulta.JWT);
    
                //return res.render(`application.ejs`, { consulta, query : query.data })


                let gravar = await new produtos({
                    Usuario: arr[1] ,
                    Produto: dados.produto,
                    Data_validade: dados.data,
                }).save()
            
                res.redirect(`/app?data=${arr[0]},${arr[1]}`)
                
                
            }

        }
        catch(err){
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