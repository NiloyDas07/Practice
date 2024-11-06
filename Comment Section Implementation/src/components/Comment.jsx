import React from "react";

const Comment = ({ comment, commentRef, setCommentId }) => {
  const { owner, replies } = comment;
  const [isReplyOpen, setIsReplyOpen] = React.useState(false);

  const handleRepliesOpen = () => {
    setIsReplyOpen(!isReplyOpen);
  };

  const handleReplyClick = () => {
    commentRef.current.value = `@${owner}, `;
    commentRef.current.focus();
    setCommentId(comment.id);
  };

  return (
    <div>
      <h5 className="comment-owner">@{owner}</h5>
      <p className="comment-content">{comment.content}</p>
      <div className="comment-reaction">
        <button className="btn-transparent" onClick={handleReplyClick}>
          Reply
        </button>
      </div>

      {replies.length > 0 && (
        <button
          type="button"
          className="comment-reply-btn btn-transparent"
          onClick={handleRepliesOpen}
        >
          <span>Replies</span>
          <span>{isReplyOpen ? "-" : "+"}</span>
        </button>
      )}

      {isReplyOpen && (
        <div className="comment-replies--container">
          {replies.map((reply) => (
            <Comment key={reply.id} comment={reply} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Comment;
