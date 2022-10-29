const express = require('express')

const router = express.Router()

router.get("/products", (req, res) =>{
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

module.exports = router
