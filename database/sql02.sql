-- SELECT * FROM users WHERE id BETWEEN 2 AND 4;
-- SELECT * FROM users WHERE id >= 2 AND id <= 4;
-- SELECT * FROM users WHERE password IS NOT NULL
-- SELECT * FROM users WHERE email ILIKE '%user1%'

-- SELECT * FROM users WHERE status = false AND (name ILIKE '%user 1%' OR email ILIKE '%user 1%')

-- SELECT * FROM users ORDER BY name, id DESC

-- SELECT * FROM users ORDER BY id DESC LIMIT 2 OFFSET 1

-- SUM, COUNT, MAX, MIN, AVG

-- SELECT COUNT(id) AS count_age, age FROM users GROUP BY age HAVING COUNT(id) >= 2;
-- SELECT COUNT(id) AS count_age, age FROM users GROUP BY age ORDER BY count_age;
-- SELECT * FROM users WHERE age IN(
-- SELECT age FROM users GROUP BY age ORDER BY COUNT(age) DESC LIMIT 1
-- )













