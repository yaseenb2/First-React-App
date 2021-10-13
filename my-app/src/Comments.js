import React, { useEffect, useState } from "react";

const url1 = "https://jsonplaceholder.typicode.com/comments?postId=";
const url2 = "https://jsonplaceholder.typicode.com/posts/";

const Posts = (props) => {
  const [post, setPost] = useState("");
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch(url1 + `${props.postId}`)
      .then((response) => response.json())
      .then((json) => setComments(json));
  },[props.postId]);

  useEffect(() => {
    fetch(url2 + `${props.postId}`)
      .then((response) => response.json())
      .then((json) => setPost(json.body));
  },[props.postId]);
  return (
    <div>
      <h2>Post {props.postId}</h2>
      <pre>{post}</pre>
      {comments.map((comment) => {
        return (
          <>
            <pre>{JSON.stringify(comment.postId)}</pre>
            <pre>{JSON.stringify(comment.body)}</pre>
          </>
        );
      })}
    </div>
  );
};

export default Posts;
