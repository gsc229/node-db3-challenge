const knex = require('../data/db-config');

module.exports = {
  find,
  findById,
  findSteps,
  add,
  addStep,
  update,
  remove

}

function find() {
  return knex('schemes')
}

function findById(id) {

  return knex('schemes')
    .where({ id: id })
    .first()
}

function findSteps(scheme_Id) {
  /*
  select steps.id, scheme_name, step_number, instructions from schemes
  join steps
  on schemes.id = steps.scheme_id and schemes.id = 1
  order by step_number;

  .join("steps", "schemes.id", "steps.scheme_id")
  .select("steps.id", "schemes.sheme_name", "steps.step_number", "steps.instructions")
  .where({sheme_id})
  
  */
  return knex('schemes')
    .join("steps", "schemes.id", "steps.scheme_id")
    .select("steps.id", "schemes.scheme_name", "steps.step_number", "steps.instructions")
    .where({ scheme_Id })
    .orderBy('steps.step_number')

}


function add(scheme) {
  return knex('schemes')
    .insert(scheme)
    .into('schemes')
}

function update(changes, id) {
  return knex('schemes')
    .where({ id })
    .update(changes, id);
}

function addStep(stepData, id) {


  return knex('steps')
    .insert(stepData, id)
    .into('steps')
}

function remove(id) {
  return knex('schemes')
    .where({ id })
    .del()
}



/*

.find()
.findById(id)
.findSteps(id)
.add(schemeData)
.remove(id)

*/