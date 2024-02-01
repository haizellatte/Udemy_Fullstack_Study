import React from "react";
import styled from "styled-components";
import { useAuth } from "../../contexts/Auth.context";

import Setting from "../../components/Mypage/Setting/Setting";
import LikeList from "../../components/Mypage/LikeList/LikeList";

function MyPage() {
  const { isLogin } = useAuth();

  return (
    <>
      {isLogin && (
        <Wrapper>
          <Setting />
          <LikeList />
        </Wrapper>
      )}
    </>
  );
}

export default MyPage;

const Wrapper = styled.div`
  display: flex;
  padding: 20px 40px;
  flex-direction: column;
  row-gap: 80px;
`;
