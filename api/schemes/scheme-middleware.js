const db = require('../../data/db-config');

async function checkSchemeId (req, res, next) {
  /*
    If `scheme_id` does not exist in the database:
    status 404_{ "message": "scheme with scheme_id <actual id> not found" }
  */
  const scheme = await db('schemes').where('scheme_id', req.params.scheme_id).first();
  if(!scheme){
    res.status(404).json({ 
      message: `scheme with scheme_id ${req.params.scheme_id} not found` 
    });
    return;
  } else {
    next();
  }
}

const validateScheme = (req, res, next) => {
/*
  If `scheme_name` is missing, empty string or not a string:
  status 400_{ message: "invalid scheme_name" }
*/
  const schemeName = req.body.scheme_name;
  if(typeof schemeName !== 'string' || !schemeName || schemeName.trim() === '' ){
    res.status(400).json({ message: "invalid scheme_name" });
    return;
  } else {
    next();
  }
}


const validateStep = (req, res, next) => {
/*
  If `instructions` is missing, empty string or not a string, or
  if `step_number` is not a number or is smaller than one:
  status 400_{ message: "invalid step" }
*/
  const { instructions, step_number } = req.body;

  if(typeof step_number !== 'number' || step_number < 1){
    res.status(400).json({ message: "invalid step" });
    return;
  } else if(typeof instructions !== 'string' || !instructions || instructions.trim() === ''){
    res.status(400).json({ message: "invalid instructions" });
    return;
  } else {
    next();
  }
}

module.exports = {
  checkSchemeId,
  validateScheme,
  validateStep,
}
