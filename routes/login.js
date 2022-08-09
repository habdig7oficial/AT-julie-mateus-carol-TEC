module.exports = function(app){

    let mongoose = require("mongoose")

    app.get("/login", function(req,res){
        res.render("login.ejs")
    })

    app.post("/login", async function (req,res){

        let users = require("../models/users")

        let dados = req.body

        console.log(dados)

        let argon2 = require("argon2")

        let cadastrado = await users.findOne({Email: dados.email})


        try{
            let verificar = await argon2.verify( cadastrado.Senha, dados.password)

            console.log(`DB ${cadastrado.Senha}, Input ${dados.password}`)

            console.log(verificar)

            if (cadastrado && dados.email == cadastrado.Email && verificar === true ){
                return res.render("application.ejs", {dados})
            }
    
        }
        catch(err){
            console.log(err)
        }

        return res.render("auth_error.ejs", {email: dados.email})





    })
}