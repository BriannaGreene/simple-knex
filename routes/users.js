const express = require('express');
const router = express.Router();
const knex = require('../knex')
router.get('/', (req, res)=>{
  conosle.log('in get')
})
module.exports = router;
