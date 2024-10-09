import { useCallback, useMemo, useState } from "react";
import ResetButton from "./ResetButton";

export default function MoneyTransfer() {
  const [histories, setHistories] = useState([]);
  const [amount, setAmount] = useState("");
  const [msg, setMsg] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    setHistories([...histories, amount]);
    setAmount("");
  };
  const total = useMemo(() => {
    return histories.reduce((total, item) => {
      //   console.log("reduce");
      return total + +item;
    }, 0);
  }, [histories]);
  const handleReset = useCallback(() => {
    setHistories((histories) => {
      const total = histories.reduce((total, item) => {
        return total + +item;
      }, 0);
      setMsg(`Số dư cuối kỳ: ${total}`);
      return [];
    });
  }, []);
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Nhập số tiền..."
          onChange={(e) => setAmount(e.target.value)}
          value={amount}
        />
        <button>Chuyển</button>
      </form>
      <hr />
      <h2>Lịch sử chuyển tiền: {total}</h2>
      {histories.map((item, index) => (
        <h3 key={index}>{item}</h3>
      ))}
      <ResetButton onClick={handleReset} />
      {msg && <p>{msg}</p>}
    </div>
  );
}
