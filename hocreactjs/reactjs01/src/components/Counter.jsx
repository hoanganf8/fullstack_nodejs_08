import { useEffect, useState } from "react";
const Counter = () => {
  //const [tenState, tenHamThayDoi] = useState(giatrimacdinh);
  const [count, setCount] = useState(0);
  const handleIncrement = () => {
    setCount(count + 1);
  };
  const handleDecrement = () => {
    setCount((prevCount) => {
      return prevCount - 1;
    });
  };
  useEffect(() => {
    console.log("Mounting");
    return () => {
      console.log("Unmounting");
    };
  }, []);
  useEffect(() => {
    console.log(`Count Update`, count);
  }, [count]);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
      {count === 10 && <p>Thành công</p>}
    </div>
  );
};

export default Counter;
