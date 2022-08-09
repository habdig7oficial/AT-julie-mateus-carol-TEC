module.exports = function (app){

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
    
                return res.render(`application.ejs`, {dados: consulta})
                
            }
    
        }

        catch{
            return res.redirect("/err")
        }


    
        





        //return res.render(`application.ejs`,dados )
    })
}