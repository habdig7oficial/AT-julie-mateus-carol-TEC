
/*
let dotenv = require("dotenv").config()

let lib_server = require("qse-x")

let lib_db = require("qmm-connect")


let server = new lib_server.default({
    parse: false,
    port : process.env.PORT,
    consign: "./routes",
    assets : "./assets",
    views : true
}).start()

//lembrar de mudar para .atlas na produção 


let db = new lib_db.default().atlas({
    user: process.env.USERAT,
    password: process.env.PASSWORDDB,
    thecluster: process.env.CLUSTER,
    banco: process.env.BANCO
})
*/




//carregar modulo do express 

let mongoose = require("mongoose")

const conexao = () => {

    mongoose.connect(process.env.CString)
}


conexao()

const express = require("express")

//executar o modulo express 
let app = express()

//setando porta de execução 

let port = process.env.PORT || 7777

//criar uma instancia local 

app.set(express.urlencoded({extended: false}))

let diretorio = require("path")

diretorio = diretorio.join(__dirname, "routes");

require("fs").readdirSync(diretorio).forEach(function(file) {
  require("./routes/" + file)(app);



});
app.use(express.static("./assets"))

app.listen(port, ()=>{
    console.log(`Ouvindo a porta ${port} em http://localhost:${port}`)
})