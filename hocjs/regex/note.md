# Regular Expression (Regex)

- Biểu thức chính quy
- Biểu thức để xử lý chuỗi nâng cao

* So khớp
* Cắt chuỗi
* Thay thế

Khi làm việc với Regex, xây dựng lên 1 pattern

Cấu tạo pattern
/regex/modifier

Website test Regex: https://regex101.com

## Các ký hiệu cơ bản

string ==> So khớp chuỗi string trong biểu có nằm trong chuỗi cần kiểm tra không?

^ (Đặt ở đầu biểu thức, sau dấu phân cách /) ==> Kiểm tra biểu thức nằm ở đầu chuỗi

$ (Đặt ở cuối biểu thức, trước dấu phân cách /) ==> Kiểm tra biểu thức nằm ở cuối chuỗi

[min-max] ==> Kiểm tra các ký tự từ min đến max (A-Z, a-z, 0-9)

[char_list] ==> Kiểm tra các ký tự ([abc])

Lưu ý:

- Các biểu thức trong cặp [], kết hợp với nhau theo điều kiện OR
- Nếu các biểu thức không nằm trong cùng cặp ngoặc [] ==> Kết hợp với nhau theo điều kiện AND và phải đúng thứ tự

- {min,} ==> Độ dài của biểu thức lớn hơn hoặc bằng min

- {value} ==> Độ dài của biểu thức bằng value

- {min, max} ==> Độ dài của biểu thức từ min đến max

Ký hiệu viết tắt độ dài

```
+ ==> Tương ứng với {1,}
* ==> Tương ứng với {0,}
? ==> Tương ứng với {0,1}
```

Hoặc (|) - Phủ định (^)

Ký hiệu đại diện cho tất cả ký tự: .

Các ký hiệu viết tắt

```
\w: Thường, hoa, số, _
\W: Ngược lại của \w
\d: Số
\D: Ngược lại của số
\s: Khoảng trắng
\S: Ngược lại của \s
```
