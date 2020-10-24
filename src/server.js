// Importar dependencia ou pacote 
const express = require("express");

//Iniciado o express
const server = express()
const path = require("path")
const pages = require("./pages.js")

//Adiciona css img js  na pasta public
server.use(express.static('public'))

// Configurar template engine
.set('views', path.join(__dirname, "views"))
.set('view engine', 'hbs' )

// Utilizar body do req
.use(express.urlencoded({extended: true }))

// Criar uma rota
.get("/", pages.index)
.get("/test", pages.test)
.get("/orphanage",pages.orphanage)
.get("/orphanages",pages.orphanages)
.get("/create-orphanage",pages.createOrphanage)
.post("/seve-orphanage",pages.seveOrphanage)
// Ligar o sevidor
server.listen(5500)

