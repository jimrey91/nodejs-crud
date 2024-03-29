let express = require('express');
let router = express.Router();

let mongoose = require('./../config/conexion');
let Persona = require('./../model/persona');

mongoose.set('useFindAndModify', false);

router.post('/persona/operar', (req, res, next) => {

    if(req.body._id === ""){
        let per = new Persona({
            nombres: req.body.nombres,
            apellidos: req.body.apellidos,
            edad: req.body.edad
        });
        per.save();
    }else{
        /* funcion depreciada*/
        Persona.findByIdAndUpdate(req.body._id, { $set: req.body }, { new: true }, (err, model) => {
            if (err) throw err;
        });
        
/*         Persona.findOneAndUpdate(req.body._id, { $set: req.body }, { new: true }, (err, model) => {
            if (err) throw err;
        }); */
    }
    res.redirect('/');
});

module.exports = router;