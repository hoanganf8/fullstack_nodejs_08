import { useState, useTransition } from "react";
import students from "./db.json";
export default function App() {
  const [keyword, setKeyword] = useState("");
  const [pending, startTransition] = useTransition();
  const handleHighlight = (e) => {
    startTransition(() => {
      setKeyword(e.target.value);
    });
  };
  return (
    <div>
      <input
        type="search"
        placeholder="Từ khóa..."
        onChange={handleHighlight}
      />
      <hr />
      <h2>Danh sách sinh viên {pending && <span>...</span>}</h2>
      {students.map((item, index) => {
        if (keyword.length) {
          const position = item.fullName
            .toLowerCase()
            .indexOf(keyword.toLowerCase());
          if (position !== -1) {
            return (
              <h3 key={index}>
                {item.fullName.slice(0, position)}
                <span style={{ background: "yellow" }}>
                  {item.fullName.slice(position, position + keyword.length)}
                </span>
                {item.fullName.slice(position + keyword.length)}
              </h3>
            );
          }
        }
        return <h3 key={index}>{item.fullName}</h3>;
      })}
    </div>
  );
}
