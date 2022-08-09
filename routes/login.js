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

        let jwt = require("jsonwebtoken")

        let cadastrado = await users.findOne({Email: dados.email})


        try{
            let verificar = await argon2.verify( cadastrado.Senha, dados.password)

            console.log(`DB ${cadastrado.Senha}, Input ${dados.password}`)

            console.log(verificar)

            if (cadastrado && dados.email == cadastrado.Email && verificar === true ){
                //return res.render("application.ejs", {dados})

                function makeid(length) {
                    var result           = '';
                    var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()|/+';
                    var charactersLength = characters.length;
                    for ( var i = 0; i < length; i++ ) {
                      result += characters.charAt(Math.floor(Math.random() * 
                 charactersLength));
                   }
                   return result;
                }

                let secret = makeid(20)

                let token = jwt.sign({
                    data: cadastrado._id
                  }, secret, { expiresIn: "60s" });


  
                  console.log(token)
                  console.log(secret)

                  let secret_db = await users.findOneAndUpdate({Enail: dados.email}, {JWT: secret})

                return res.redirect(`/app?data=${token},${cadastrado.Email}`)
            }
    
        }
        catch(err){
            console.log(err)
        }

        return res.render("auth_error.ejs", {email: dados.email})





    })
}