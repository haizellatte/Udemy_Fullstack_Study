"use client";

import { useEffect } from "react";

function PostLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    alert("포스트 페이지에 들어왔음");
  }, []);

  return (
    <div>
      <h1>여기서부턴 post의 레이아웃임</h1>
      {children}
    </div>
  );
}

export default PostLayout;
