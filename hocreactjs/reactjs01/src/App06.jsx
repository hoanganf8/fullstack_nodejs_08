import { createContext, useState } from "react";
import Comments from "./components/Comments/Comments";
export const AppContext = createContext();
export default function App() {
  const [message, setMessage] = useState("Học React không khó");
  return (
    <div>
      <AppContext.Provider value={{ message, setMessage }}>
        <Comments />
      </AppContext.Provider>
    </div>
  );
}

/*
Các bước làm việc với Context
- Tạo đối tượng context: React.createContext()
- Bọc Component Provider vào các component con cần truyền dữ liệu tới
- Tại Component cần lấy dữ liệu ==> Gọi context và đưa vào Hook useContext để nhận dữ liệu
*/
