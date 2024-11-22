# Logic xác thực

## Authentication

- Lấy body: email, password
- Tìm email có tồn tại trong bảng users không? --> Không tồn tại thông báo lỗi
- Lấy password hash từ database
- Verify password hash với password từ body --> Failed --> Thông báo lỗi
- Lưu user_id hoặc email vào JWT (Dùng thư viện jsonwebtoken)
- Trả về response token tương ứng
  `

## Authorization

- Gửi request header: Authorization: Bearer token-can-gui
- Server đọc header Authorization và cắt ra token
- Kiểm tra token có nằm trong blacklist không? (Database, Redis)
- Verify token (Dùng thư viện jsonwebtoken) --> Trả về được thông tin trong token (user_id hoặc email)
- Dùng dữ liệu từ token để lấy thông tin trong database
- Trả về response

## Logout

- Gửi request chứa token lên server
- Verify token
- Thêm token vào blacklist
- Trả về response
