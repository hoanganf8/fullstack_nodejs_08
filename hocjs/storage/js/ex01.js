/*
1. localStorage
- Dung lượng lưu trữ lớn: 10mb
- Chỉ lưu trữ text
- Thời gian lưu trữ không giới hạn
- Server không thể can thiệp
- Dễ bị tấn công XSS
- Phân biệt theo origin: scheme + hostname + port

Code: 
localStorage.getItem(key)
localStorage.setItem(key, value)
localStorage.removeItem(key)
localStorage.clear()

2. sessionStorage
- Dung lượng lưu trữ lớn: 10mb
- Chỉ lưu trữ text
- Thời gian lưu trữ theo phiên (Tắt trình duyệt là mất)
- Server không thể can thiệp
- Dễ bị tấn công XSS
- Phân biệt theo origin

Code: 
sessionStorage.getItem(key)
sessionStorage.setItem(key, value)
sessionStorage.removeItem(key)
sessionStorage.clear()

3. cookie
- Dung lượng lưu trữ thấp (Khoảng 4kb)
- Chia sẻ dữ liệu tới các subdomain
- Chỉ lưu trữ được text
- Phân biệt theo path
- Server có thể đọc được cookie và set cookie
- Có chế độ bảo mật: 
+ HttpOnly
+ Secure
- Dễ bị tấn công CSRF
- Quy định thời gian lưu trữ
+ session cookie
+ Persistent cookies

Cấu tạo của cookie
key=value;path=duong-dan;expires|max-age=thoi-han;domain=tenmien;secure;httpOnly
*/
