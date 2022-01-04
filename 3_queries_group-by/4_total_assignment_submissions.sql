SELECT cohorts.name as cohort, count(assignment_submissions.*) as total_submissions
FROM assignment_submissions
JOIN students ON student_id = students.id
JOIN cohorts ON cohorts.id = cohort_id
GROUP by cohort
ORDER BY total_submissions DESC;