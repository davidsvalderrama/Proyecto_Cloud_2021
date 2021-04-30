const express = require('express');
const router = express.Router();

//API for the project Cloud 2021 of AWS S3
const APIS3 = require('../database/amazonS3')

//Get user page
router.get('/users', async function (req, res, next)  {
  const dataFromS3 = await APIS3.getUsersFromS3();
  res.send(dataFromS3);
  console.log(dataFromS3);
});



module.exports = router;
