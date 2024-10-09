# Package

- Cài đặt thủ công
- Cập nhật thủ công
- Gỡ bỏ thủ công (Quên gỡ thư viện nếu không dùng)
- Di chuyển ==> Nặng
- Xung đột thư viện

==> Giải pháp: Công cụ quản lý thư viện

- Thao tác thông qua giao diện dòng lệnh (CLI = Commandline Interface)
- Thư viện sẽ được lưu trữ trên store

## Các công cụ

- Node Package Manager (NPM)
- Yarn

Lưu ý: Khi cài thư viện ==> Sinh ra folder node_modules

## Khởi tạo dự án

npm init -y ==> Tạo ra file package.json

## Cài đặt tất cả Dependencies

npm i hoặc npm install

## Cài đặt 1 package

npm i ten_package hoặc npm install ten_package

## Cài đặt nhiều package

npm i package1 package2 package3

## Gỡ bỏ Dependencies

npm uninstall ten_package

## Các loại dependencies

- Simple Dependency ==> npm i ten_package
- Dev Dependency ==> npm i ten_package --save-dev

## Chỉ cần cài đặt Dependencies phụ vụ production

npm i --product

## Các loại cài đặt package

- Local: npm i ten_package
- Global: npm i ten_package -g

npm root -g ==> Kiểm tra đường dẫn chứa các dependencies global

npm list -g ==> Liệt kê các dependencies được cài đặt global

## Phiên bản

major.minor.patch

Khi chạy lệnh update của npm ==> Chỉ update minor và patch

## Cập nhật phiên bản

npm update ten_package

npm update ==> Cập nhật tất cả package

## Cài đặt Dependency theo phiên bản

npm i ten_package@phienban hoặc npm install ten_package@phienban
