import { forwardRef } from "react";

/* eslint-disable react/prop-types */
function Button(props, ref) {
  return <button ref={ref}>OK chưa?</button>;
}

export default forwardRef(Button);

//HOC = Higher Order Component
// - Hàm bọc 1 component và nhận vào Component ban đầu
// - Trả về component mới

//Ví dụ: helloK8(Button)
