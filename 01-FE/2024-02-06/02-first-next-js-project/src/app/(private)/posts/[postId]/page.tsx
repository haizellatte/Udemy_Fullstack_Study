import React from "react";

function PostDetailPage(props: { params: { postId: string } }) {
  const params = props.params;
  const postId = params.postId;
  console.log(postId);
  return <div>포스트 상세 페이지 입니다~~~!!! {postId} !!!</div>;
}

export default PostDetailPage;
