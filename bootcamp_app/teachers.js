const { Pool } = require('pg');

const args = process.argv.slice(2);

//database connection
const pool = new Pool({
  user: 'vagrant',
  password: '123',
  host: 'localhost',
  database: 'bootcampx'
});

//query execution
pool.query(`
  SELECT DISTINCT teachers.name as teacher, cohorts.name as cohort
  FROM assistance_requests
  JOIN teachers ON teachers.id = teacher_id
  JOIN students ON students.id = student_id
  JOIN cohorts ON cohorts.id = cohort_id
  WHERE cohorts.name LIKE '%${args[0]}%'
  ORDER BY teacher;
`)
  .then(function callback(data) { 
    data.rows.forEach(user => {
      console.log(`${user.cohort}: ${user.teacher}`);
    })
  })
  .catch(function error(err) {
    console.log(err);
  });