# Thẻ Block (Khối)

- Luôn phát sinh ở hàng mới
- Chiều rộng mặc định bằng 100% so với thành phần cha

# Thẻ Inline (Trên dòng)

- Chiều rộng mặc định bằng với nội dung của thẻ
- Các thẻ inline đứng cạnh nhau nằm trên 1 dòng (Trừ phi tổng chiều rộng các inline > chiều rộng thành phần cha)

# Đường dẫn tuyệt đối, tương đối

1. Thế nào là đường dẫn tuyệt đối? Tương đối?

2. Phân biệt các loại đường dẫn sau

./duong-dan --> Phụ thuộc vào thư mục đang đứng
duong-dan --> Phụ thuộc vào thư mục đang đứng
../duong-dan --> Đẩy ra ngoài 1 cấp (Vẫn phụ thuộc)
../../duong-dan --> Đẩy ra ngoài 2 cấp (Vẫn phụ thuộc)
/duong-dan --> Tuyệt đối (Di chuyển về gốc của tên miền, sau port)
//tenmien.com/duong-dan
https://tenmien.com/duong-dan

Trang chủ: http://127.0.0.1:5500

Độ ưu tiên trong CSS

0. important
1. inline
2. id
3. class
4. tag

Lưu ý:

- Selector càng chi tiết --> Ưu tiên càng cao
- Code ở bên dưới ưu tiên cao hơn
