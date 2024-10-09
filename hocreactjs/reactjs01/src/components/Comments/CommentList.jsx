import { useContext } from "react";
import { CommentContext } from "./Comments";
export default function CommentList() {
  const { comments } = useContext(CommentContext);
  return (
    <div>
      {comments.map((comment, index) => (
        <div key={index}>
          <p>{comment}</p>
          <button>Sửa</button>
        </div>
      ))}
    </div>
  );
}
