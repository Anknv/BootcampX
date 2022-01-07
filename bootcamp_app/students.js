const { Pool } = require('pg');

const args = process.argv.slice(2);

const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

pool.query(`
  SELECT students.id, students.name as student, cohorts.name as cohort
  FROM students
  JOIN cohorts ON cohorts.id = cohort_id
  WHERE cohorts.name LIKE '%${args[0]}%'
  LIMIT ${args[1] || 5};
`)
  .then(function callback(data) { 
    data.rows.forEach(user => {
      console.log(`${user.student} has an id of ${user.id} and was in the ${user.cohort} cohort`);
    })
  })
  .catch(function error(err) {
    console.log(err);
  });