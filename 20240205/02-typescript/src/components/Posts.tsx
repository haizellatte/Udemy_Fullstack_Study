import React from "react";

type Post = {
  title: string;
  content: string;
};

//! 방법 1
interface Post1Props {
  posts: {
    title: string;
    content: string;
  }[];
}

//! 방법 2
interface Post2Props {
  posts: Array<{
    title: string;
    content: string;
  }>;
}

//! 방법 3
export interface Post3Props {
  posts: Post[];
}

function Posts({ post }: Post3Props) {
  return <div></div>;
}

export default Posts;
