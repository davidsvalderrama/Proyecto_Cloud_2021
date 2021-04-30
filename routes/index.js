const express = require('express');
const router = express.Router();

const usersAPI = require('./usersAPI');
let usersData = usersAPI.usersData;

//API for the project Cloud 2021 of DynamoDB
const API = require('../database/dynamoConnection');

//Get page of login
router.get('/login', (req, res) => {
  res.render('login');
});

//Get home page
router.get('/animals', async function (req, res, next) {
  try {
    const dataJson = await API.getDataFromAnimals();
    //console.log(fullDataAnimals);
    console.log(dataJson);
    res.render('index', { dataJson });
  } catch (err) {
    next(err);
  }
});

//Get Details page
router.get('/:id', async function (req, res, next) {
  const { id, imageUrl } = req.params;
  const { url } = req.query;
  const dataJson = await API.getDataFromAnimals();
  const animal = dataJson.find(animal => animal.id == id);
  res.render('details', { animal });
});

//Get adopt Page
router.get('/:id/adopt', async function (req, res, next) {
  const { id } = req.params;
  const dataJson = await API.getDataFromAnimals();
  const animal = dataJson.find(animal => animal.id == id);
  res.render('adopt', { animal });
});

//Assign owner
router.post('/own/:id', async function (req, res, next) {
  const iduser = req.body.idtx;
  const dataJson = await API.getDataFromAnimals();
  const animal = dataJson.find(animal => animal.id == req.params.id)
  animal.owner = usersData.find(user => user.id == iduser).fullname;
  //console.log(animal);
  res.render('index', { dataJson });
});

/*
//Update cat
router.put('/animals/:id',function(req, res){
  const { id } = req.params;
  const { animalname, breedname, speciesname, animalage, basecolour} = req.body;
  const { animal, err } = animalsAPI.updateA(id, animalname, breedname, speciesname, animalage, basecolour );
  if (err) return next();
  console.log("Animal actualizado")
  res.send(animal);
});

//Delete cat
router.delete('/animals/:id',function(req, res){
  const {id} = req.params;
  const animal = animalsAPI.deleteA(id)
  res.send(animal);
})

//Create cat
router.post('/animals',function(req, res){
  const {animalname, breedname, speciesname, animalage, basecolour} = req.body;
  const result = schema.validate({ animalname, breedname, speciesname, animalage, basecolour });
  if (result.error) return res.status(400).send(result.error.details[0].message);
  const animal = animalsAPI.add(animalname, breedname, speciesname, animalage, basecolour);
  console.log("Animal añadido");
  res.send(animal);
});
*/

module.exports = router;
