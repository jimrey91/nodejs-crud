var express = require('express');
var router = express.Router();

let mongoose = require('./../config/conexion');
let Persona = require('./../model/persona')

/* GET home page. */
router.get('/', (req, res, next) => {
  Persona.find((err, personas) =>{
    if (err) throw err;
    res.render('index', { personas: personas });
  });
});

router.get('/persona/nuevo', (req, res, next) => {
  res.render('personaForm', {});
});

router.get('/persona/modificar/:id', (req, res, next) => {
  let idPersona = req.params.id;
  Persona.findOne({_id: idPersona}, (err, persona) => {
    console.log(persona);
    if (err) throw err;
    res.render('personaForm', {persona: persona});
  });
});

router.get('/persona/eliminar/:id', (req, res, next) => {
  let idPersona = req.params.id;

/*  Persona.remove({_id: idPersona}, (err) => {
    if(err) throw err;
    res.redirect('/');
  });*/
  
  Persona.deleteOne({_id: idPersona}, (err) => {
    if(err) throw err;
    res.redirect('/');
  });
});

module.exports = router;
