import { useRef, useState } from "react";
import Comment from "./Comment";

const CommentSection = () => {
  const [comments, setComments] = useState([
    {
      id: "Date.now()",
      owner: "User1",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet doloremque iure natus necessitatibus libero eveniet nam dolores, aliquam accusantium. Cupiditate temporibus ipsam sed qui perspiciatis corporis eius voluptate! Ea, quia.",
      likes: 0,
      dislikes: 0,
      likedByUser: false,
      dislikedByUser: false,
      replies: [
        {
          id: "Date.now()",
          owner: "User2",
          content:
            "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet doloremque iure natus necessitatibus libero eveniet nam dolores, aliquam accusantium. Cupiditate temporibus ipsam sed qui perspiciatis corporis eius voluptate! Ea, quia.",
          likes: 0,
          dislikes: 0,
          likedByUser: false,
          dislikedByUser: false,
          replies: [],
        },
      ],
    },
  ]);

  const [commentId, setCommentId] = useState("");

  const commentRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const newComment = {
      id: Date.now(),
      owner: "Current User",
      content: commentRef.current.value,
      likes: 0,
      dislikes: 0,
      likedByUser: false,
      dislikedByUser: false,
      replies: [],
    };

    if (!commentId)
      setComments((prevComments) => [...prevComments, newComment]);
    else {
      setComments((prevComments) =>
        prevComments.map((comment) =>
          comment.id === commentId
            ? {
                ...comment,
                replies: [...comment.replies, newComment],
              }
            : comment
        )
      );
    }

    commentRef.current.value = "";
    setCommentId("");
  };

  return (
    <div className="container comment-section">
      <h2>Comments</h2>
      <form onSubmit={(e) => handleSubmit(e)} className="comment-section--form">
        <label>
          <span className="comment-section--label">Comment: </span>
          <textarea
            type="text"
            className="comment-section--input"
            ref={commentRef}
          />
        </label>

        <button className="comment-section--button">Post</button>
      </form>

      <div className="comment-section--comments">
        {comments.map((comment) => (
          <Comment
            comment={comment}
            key={comment.id}
            commentRef={commentRef}
            setCommentId={setCommentId}
          />
        ))}
      </div>
    </div>
  );
};

export default CommentSection;
