
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

let dotenv = require("dotenv").config()



const express = require("express")

const app = express()

app.use(express.urlencoded({ extended: false }))

const porta = process.env.PORT || 7777

const consign = require("consign")


let routes_arr = [
    require("./routes/alterados")(app),
    require("./routes/app") (app),
    require("./routes/consumidos") (app),
    require("./routes/error") (app),
    require("./routes/excluidos") (app),
    require("./routes/index") (app),
    require("./routes/login") (app),
    require("./routes/registro") (app),
    require("./routes/vencidos")(app)
]

const static = app.use(express.static("./assets"))


app.listen(porta, ()=>{
    console.log("run")
})

//console.log(express.urlencoded({ extended: false }))


let lib_db = require("qmm-connect")

let db = new lib_db.default().atlas({
    user: process.env.USERAT,
    password: process.env.PASSWORDDB,
    thecluster: process.env.CLUSTER,
    banco: process.env.BANCO
})