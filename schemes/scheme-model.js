const knex = require('../data/db-config');

module.exports = {
  find,
  findById,
  findSteps,
  add
}

function find() {
  return knex('schemes')
}

function findById(id) {

  return knex('schemes')
    .where({ id: id })
    .first()
}

function findSteps(id) {
  /*
  select steps.id, scheme_name, step_number, instructions from schemes
  join steps
  on schemes.id = steps.scheme_id and schemes.id = 1
  order by step_number;
  
  */
  return knex('schemes')

    .select('steps.id', 'scheme_name', "step_number", "instructions").from('schemes')

    .join('steps', 'schemes.id', '=', 'steps.scheme_id', 'and', 'steps.scheme_id', '=', id)


}


function add(scheme) {
  return knex('schemes')
    .insert(scheme, 'id')
    .into('schemes')

}



/*

.find()
.findById(id)
.findSteps(id)
.add(schemeData)
.findById(id)
.findById(id)
.remove(id)

*/