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
