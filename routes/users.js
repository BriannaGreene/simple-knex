const express = require('express');
const router = express.Router();
const knex = require('../knex');

router.get('/', (req, res)=>{
  console.log("in")
})

module.exports = router
