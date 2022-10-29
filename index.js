const { Router } = require("express")
const express = require("express")
const routerApi = require('./routers')

const app = express()
const port = 3000;

app.get("/", (req, res) =>{
  res.send("hola mundo")
} )

app.get("/patitofeliz", (req, res) => {
  console.send("patito feliz")
})

routerApi(app)

app.get("/products", (req, res) =>{
  res.jason([
    {
      name:"comic 1",
      price:45000,
      year: 2000
    },
    {
      name:"comic2",
      price:10000,
      year: 2100
    },
    {
      name:"comic 1",
      price:45000,
      year: 2000
    },
    {
      name:"comic 1",
      price:45000,
      year: 2000
    },
    {
      name:"comic 1",
      price:45000,
      year: 2000
    },
  ])
})


app.listen(port, ()=> {
  console.log("mi puerto es " + port)
})






