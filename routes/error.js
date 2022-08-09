module.exports = function (app){
    app.get("/err", function(req,res){

        let data = req.query

        return res.render("auth_error.ejs", {email: data})
    })
}