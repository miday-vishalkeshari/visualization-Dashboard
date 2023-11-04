const express = require('express')
const {getDataController}= require('../controller/data-controller')


const router = express.Router();

router.get('/get-data',getDataController);//  requireSignIn
     

module.exports = router;