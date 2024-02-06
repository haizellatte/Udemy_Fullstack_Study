import React, { useEffect, useState } from "react";

const getPostsEndPoint = "https://jsonplaceholder.typicode.com/posts";

function Posts() {
  const [count, setCount] = useState(0);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(getPostsEndPoint, {
      method: "GET",
    })
      .then((res) => res.json())
      .then((data) => setPosts(data));
  }, []); //* 👈 빈 배열 : 컴포넌트가 처음 렌더링 될때만!

  return (
    <div>
      <h2>📮 Posts</h2>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>💌</button>
      <ol>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ol>
      {/* ❗️리렌더링 된다 === 함수가 다시 실행된다 === data fetching을 다시 받아오게 된다. */}
    </div>
  );
}

export default Posts;
