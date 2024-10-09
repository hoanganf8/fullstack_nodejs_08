// import Counter from "./components/Counter";

import { useRef } from "react";
import Input from "./components/Input";

// import MoneyTransfer from "./components/MoneyTransfer";

export default function App() {
  // return <Counter />;
  // return <MoneyTransfer />;
  const inputRef = useRef();
  const handleClick = () => {
    inputRef.current.focus();
    // console.log(inputRef);
    // inputRef.current.remove();
    inputRef.current.value = "Ok chưa?";
  };
  return (
    <div>
      <Input ref={inputRef} />
      <button onClick={handleClick}>Focus</button>
    </div>
  );
}
