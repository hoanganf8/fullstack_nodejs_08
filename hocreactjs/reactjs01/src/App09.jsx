import { useReducer } from "react";
const reducer = (state, action) => {
  switch (action.type) {
    case "counter/increment": {
      return { ...state, count: state.count + action.payload };
    }
    case "counter/decrement": {
      return { ...state, count: state.count - action.payload };
    }
    default: {
      return state;
    }
  }
};
const initialState = {
  count: 0,
};
export default function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const handleIncrement = () => {
    dispatch({
      type: "counter/increment",
      payload: 5,
    });
  };
  const handleDecrement = () => {
    dispatch({
      type: "counter/decrement",
      payload: 2,
    });
  };

  return (
    <div>
      <h1>Count: {state.count}</h1>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}
