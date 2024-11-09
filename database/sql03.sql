-- SELECT users.*, phones.phone FROM users
-- LEFT JOIN phones
-- ON users.id = phones.user_id
-- ORDER BY users.id DESC

-- BÀI TẬP: LIỆT KÊ TẤT CẢ USERS VÀ SỐ LƯỢNG POST TỪNG USERS
SELECT users.*, COUNT(posts.id) AS post_count
FROM users
LEFT JOIN posts
ON users.id = posts.user_id
GROUP BY users.id
HAVING COUNT(posts.id) > 0