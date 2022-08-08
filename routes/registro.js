module.exports = function (app) {
    app.get("/registro", function (req,res) {
        res.render("registro.ejs")
    })


    app.post("/registro", function (req,res) {
        
    })
}