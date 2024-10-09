import { createContext, useState } from "react";
import CommentForm from "./CommentForm";
import CommentList from "./CommentList";
export const CommentContext = createContext();
export default function Comments() {
  const [comments, setComments] = useState(["Comment 1", "Comment 2"]);
  // const [commentValue, setCommentValue] = useState("");
  // const handleAddComment = (e) => {
  //   e.preventDefault();
  //   if (!commentValue) {
  //     return alert("Vui lòng nhập comment");
  //   }
  //   setComments([...comments, commentValue]);
  //   setCommentValue("");
  // };
  // const handleChangeValue = (e) => {
  //   setCommentValue(e.target.value);
  // };

  return (
    <div>
      <h2>Comments ({comments.length})</h2>
      <CommentContext.Provider value={{ comments, setComments }}>
        <CommentList />
        <CommentForm />
      </CommentContext.Provider>
    </div>
  );
}
