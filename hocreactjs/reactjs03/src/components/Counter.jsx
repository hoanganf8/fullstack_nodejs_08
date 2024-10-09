import { useState } from "react";
import Content from "./Content";

export default function Counter() {
  const [count, setCount] = useState(0);
  console.log("1. Counter render");

  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>+</button>
      <Content count={1} />
    </div>
  );
}
