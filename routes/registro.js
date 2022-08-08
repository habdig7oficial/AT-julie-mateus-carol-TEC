module.exports = function (app) {

    let users = require("../models/users")

    app.get("/registro", function (req,res) {
        res.render("registro.ejs")
    })


    app.post("/registro", async function (req,res) {

        let dados = req.body

        if (dados.password[0] != dados.password[1]){
            return res.send("As senhas não correspondem") //res.send(`As senha ${dados.password[0]} & ${dados.password[1]} não correspondem`)
        }


        let repetido = await users.findOne({Email:dados.email})

        if (repetido ) {
            return res.render( "email_cadastrado.ejs", {email: dados.email})
        }

        let argon2 = require("argon2")

            let senha_hash = await argon2.hash(dados.password[0])


        console.log(repetido)

        let gravar = await new users({
            Nome: dados.name,
            Email: dados.email,
            Senha: senha_hash,
        }).save()

        let consulta = await users.find({})

        res.render("confirmar.ejs" , {dados})
        
    })
}