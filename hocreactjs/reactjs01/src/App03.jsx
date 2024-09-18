// import Counter from "./components/Counter";
// import Form from "./components/Form";

import Posts from "./components/Posts";

const App = () => {
  return (
    <div>
      {/* <Counter /> */}
      {/* <Form /> */}
      <Posts />
    </div>
  );
};

export default App;

/*
React hook: Xuất hiện ở phiên bản 16.8
- Hàm bắt đầu bằng từ khóa use
- Chỉ được dùng trong functional Component
- Bắt buộc phải gọi ở cấp đầu tiên trong funcional component
- Cho phép tương tác với các chức năng trong core của React: state, lifecycle,...

State
- Trạng thái của component
- Thể hiện dữ liệu của component và có thể thay đổi được trong chính component
- Khi state thay đổi ==> Component sẽ bị re-render ==> Giao diện sẽ được cập nhật (Repaint)
- Không được thay đổi trực tiếp giá trị state mà phải thông qua hàm thay đổi
- Khi hàm thay đổi state được gọi ==> Ưu tiên re-render ==> Cho nên giá trị state mới sẽ không được thay đổi ngay
*/
