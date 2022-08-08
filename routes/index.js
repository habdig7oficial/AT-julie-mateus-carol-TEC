module.exports = function ( app ) {
    app.get("/", function (req, res) {
        res.render("index.ejs", {n_cadastro:222,n_vencidos:1})
    })
}