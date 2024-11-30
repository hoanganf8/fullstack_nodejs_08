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

## Permission System

NHÓM 1: Thiết lập quyền

### Roles

GET /roles --> Lấy danh sách roles

POST /roles --> Thêm role mới
Options: Thêm permission vào role, nếu permission không tồn tại tự động tạo permission mới

PATCH /roles/{id} --> Sửa role
Options: Cập nhật lại dữ liệu bảng trung gian roles_permissions

DELETE /roles/{id} --> Xóa role (Xóa dữ liệu cả bảng trung gian)

POST /roles/{id}/copy --> Copy role cũ sang role mới (Lưu ở bản nháp)

### Users

GET /users/{userId}/roles --> Danh sách roles theo userId

PUT /users/{userId}/roles --> Cập nhật role cho 1 user

DELETE /users/{userId}/roles --> Xóa tất cả roles của 1 user

PUT /users/{userId}/permissions --> Thiết lập quyền riêng cho 1 user

DELETE /users/{userId}/permissions --> Xóa hết quyền riêng của 1 user

NHÓM 2: Kiểm tra quyền

### Lấy tất cả permission của 1 user

- Lấy permission của role được gán vào user
- Lấy permission được gán vào trực tiếp vào user
  ==> Lọc trùng

## Vấn đề root khi phân quyền

- Danh sách user --> Tạo 1 tài khoản root (Không xóa được)
- Tạo role "Super Admin" --> Không thay đổi được

## Tìm hiểu trước

- Queue trong Back-End
- Task Scheduler
- Cronjob (Linux)
- Concurrency
