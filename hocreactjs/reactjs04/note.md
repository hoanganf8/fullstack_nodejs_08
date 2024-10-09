# Redux

- Thư viện quản lý Global State trong các ứng dụng Javascript
- Redux không phải của ReactJS

## Các thành phần của Redux

- Store: Kho lưu trữ State
- Reducer: Hàm để quản lý việc cập nhật state
- Action: Object mô tả hành động cập nhật state
- Dispatch: Hàm gửi action lên Reducer
- Subscribe: Lắng nghe sự thay đổi của State trên store

## Làm sao để tích hợp Redux vào React

Sử dụng thư viện React-Redux

- Có sẵn Component Provider
- Có sẵn Hook cần thiết

* useDispatch
* useSelector

- Tự động re-render khi state trên store thay đổi

## Lộ trình học Redux

- Redux Core + Kết hợp với React
- Redux Toolkit + Kết hợp với React
- Redux Middleware: Thunk, Saga

## Redux Toolkit

Gom các thành phần của 1 module vào 1 slice

- reducer
- state
- action
- action creator

Tích hợp sẵn redux-thunk

Tích hợp sẵn với Redux Devtool
