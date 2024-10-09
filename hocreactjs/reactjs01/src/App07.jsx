import { useEffect, useRef, useState } from "react";
import Button from "./components/Button";

export default function App() {
  const [count, setCount] = useState(0);
  //   const myRef = useRef(0);
  const inputRef = useRef();

  const handleClick = () => {
    setCount(count + 1);
    // myRef.current++;
  };
  //   console.log(myRef);
  const buttonRef = useRef();
  useEffect(() => {
    console.log(inputRef);
    inputRef.current.focus();
    console.log(buttonRef);
  }, []);

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleClick}>Click me</button>
      <div>
        <input type="text" placeholder="Vui lòng nhập..." ref={inputRef} />
        <Button ref={buttonRef} />
      </div>
    </div>
  );
}
