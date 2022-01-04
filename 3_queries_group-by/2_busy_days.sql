SELECT day, count(*) as total_assignments
FROM assignments
GROUP by day
HAVING count(*) >= 10
ORDER BY day;