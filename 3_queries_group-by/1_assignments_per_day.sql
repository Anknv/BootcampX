SELECT day, count(assignments.*) as total_assignments
FROM assignments
GROUP by day
ORDER BY day;