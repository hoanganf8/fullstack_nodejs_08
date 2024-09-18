// import Header from "./components/Header";
import Input from "./components/Input";

const App = () => {
  //   const handleClick = () => {
  //     console.log("Click me");
  //   };
  //   const handleClick2 = (value) => {
  //     console.log(value);
  //   };
  //   const handleChangeValue = (e) => {
  //     const value = e.target.value;
  //     console.log(value);
  //   };
  //   const user = {
  //     name: "Hoàng An",
  //     email: "hoangan.web@gmail.com",
  //   };
  const handleChangeValue = (e) => {
    console.log(e.target.value);
  };
  return (
    <div>
      {/* <Header title="F8" {...user}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa
          quibusdam illum voluptas cum sunt temporibus voluptates laboriosam,
          ab, in, itaque saepe quos esse iure similique quis omnis ratione quia
          ipsum.
        </p>
      </Header>
      <h1 className="title">Đây là trang chủ</h1>
      <div>
        <input
          type="text"
          placeholder="Nhập tên"
          onChange={handleChangeValue}
        />
      </div>
      <button onClick={handleClick}>Click me</button>
      <button onClick={() => handleClick2("F8")}>Click me 2</button> */}
      <Input onChange={handleChangeValue} />
    </div>
  );
};

export default App;
