import { decrement, increment } from "../store/actions/counterActions";
import { useDispatch, useSelector } from "../store/hook";

export default function Counter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.count);
  const handleIncrement = () => {
    dispatch(increment());
  };
  const handleDecrement = () => {
    dispatch(decrement());
  };
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={handleDecrement}>-</button>
      <button onClick={handleIncrement}>+</button>
    </div>
  );
}
