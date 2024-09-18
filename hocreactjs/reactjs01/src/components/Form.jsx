import { useState } from "react";

const Form = () => {
  const [form, setForm] = useState({});
  const [msg, setMsg] = useState({});
  const [users, setUsers] = useState([]);
  const handleSubmit = (e) => {
    e.preventDefault();
    //Validate
    //Kiểm tra nếu validate thành công ==> Log chữ thành công
    //Ngược lại: Hiển thị lỗi ở từng ô input
    const errors = {};
    if (!form.name) {
      errors.name = "Vui lòng nhập tên";
    }
    if (!form.email) {
      errors.email = "Vui lòng nhập email";
    }
    if (!Object.keys(errors).length) {
      setUsers([...users, { name: form.name, email: form.email }]);
      setForm({});
    }
    setMsg(errors);
  };

  const handleChangeValue = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const handleRemove = (index) => {
    if (window.confirm("Chắc chưa?")) {
      setUsers(users.filter((_, _index) => _index !== index));
    }
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            placeholder="Name..."
            name="name"
            onChange={handleChangeValue}
            value={form.name ?? ""}
          />
          {msg.name && <p>{msg.name}</p>}
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Email..."
            name="email"
            onChange={handleChangeValue}
            value={form.email ?? ""}
          />
          {msg.email && <p>{msg.email}</p>}
        </div>
        <button type="submit">Submit</button>
      </form>
      <hr />
      <h2>Danh sách người dùng</h2>
      {users.map(({ name, email }, index) => (
        <p key={index}>
          {name} - {email}{" "}
          <button onClick={() => handleRemove(index)}>&times;</button>
        </p>
      ))}
    </>
  );
};

export default Form;
