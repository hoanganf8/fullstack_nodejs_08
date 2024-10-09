import { useContext, useState } from "react";
import { AppContext } from "../../App";
import { CommentContext } from "./Comments";

export default function CommentForm() {
  const { message, setMessage } = useContext(AppContext);
  const { setComments } = useContext(CommentContext);
  const [commentValue, setCommentValue] = useState("");
  const handleAddComment = (e) => {
    e.preventDefault();
    setComments((comments) => {
      return [...comments, commentValue];
    });
    setCommentValue("");
  };
  const handleChangeValue = (e) => {
    setCommentValue(e.target.value);
  };
  return (
    <form onSubmit={handleAddComment}>
      <textarea
        placeholder="Write a comment..."
        onChange={handleChangeValue}
        value={commentValue}
      ></textarea>
      <button>Send</button>
      <h2>{message}</h2>
      <button type="button" onClick={() => setMessage("Học React quá khó")}>
        Change Message
      </button>
    </form>
  );
}
