import { useEffect, useRef, useState } from "react";

export default function App() {
  const data = ["Checkbox 1", "Checkbox 2", "Checkbox 3", "Checkbox 4"];
  const checkAllRef = useRef();
  const checkListRef = useRef([]);
  const [count, setCount] = useState(0);
  const handleCheckAll = (e) => {
    const status = e.target.checked;
    checkListRef.current.forEach((el) => {
      el.checked = status;
    });
    setCount(status ? data.length : 0);
  };
  const handleCheckItem = (e) => {
    const status = e.target.checked;
    setCount((prevCount) => {
      return status ? prevCount + 1 : prevCount - 1;
    });
  };
  useEffect(() => {
    checkAllRef.current.checked = count === data.length;
  }, [count, data.length]);
  return (
    <div>
      <div>
        <label>
          <input type="checkbox" ref={checkAllRef} onChange={handleCheckAll} />
          Check All
        </label>
      </div>
      <hr />
      {data.map((item, index) => (
        <div key={index}>
          <label>
            <input
              type="checkbox"
              ref={(el) => {
                checkListRef.current[index] = el;
              }}
              onChange={handleCheckItem}
            />{" "}
            {item}
          </label>
        </div>
      ))}
    </div>
  );
}
