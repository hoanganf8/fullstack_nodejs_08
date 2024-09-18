import { useState } from "react";
import Counter from "./components/Counter";

const App = () => {
  const [isShow, setShow] = useState(true);
  return (
    <div>
      <button onClick={() => setShow(!isShow)}>Toggle</button>
      {isShow && <Counter />}
    </div>
  );
};

export default App;
