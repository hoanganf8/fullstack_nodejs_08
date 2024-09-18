/* eslint-disable react/prop-types */
const Input = ({ onChange }) => {
  return (
    <div>
      <input type="text" placeholder="Nhập tên" onChange={onChange} />
    </div>
  );
};

export default Input;

/*
App
    - Component A
    - Component B

const a = () => {}
const b = a;
const c = b;
c();  
*/
