import React, { useState } from "react";
import styled from "styled-components";
import { useAuth } from "../../contexts/Auth.context";
import { useProfile } from "../../contexts/Profile.context";
import { Navigate } from "react-router-dom";

function SigninPage() {
  const { isLogin, login } = useAuth();
  const { setNickname } = useProfile();
  const [userInfo, setUserInfo] = useState({
    id: "",
    pw: "",
    nickname: "",
  });

  const HandleNaviMainPage = () => <Navigate to="/" />;

  const handleClickSignIn = () => {
    if (!userInfo.nickname || !userInfo.id || !userInfo.pw) {
      return alert("필요한 정보를 모두 입력해주세요.");
    }
    if (
      !userInfo.nickname.length.length &&
      userInfo.id === "udemy" &&
      userInfo.pw === "udemy"
    ) {
      login();
      setNickname(() => userInfo.nickname);
    } else {
      return alert("아이디 또는 비밀번호가 잘못되었습니다.");
    }
  };

  return (
    <Container>
      {isLogin ? (
        HandleNaviMainPage()
      ) : (
        <>
          <h2>Sign-In</h2>
          <form onSubmit={(e) => e.preventDefault()}>
            <Input
              type="text"
              placeholder="Nick name"
              value={userInfo.nickname}
              onChange={(e) =>
                setUserInfo({ ...userInfo, nickname: e.target.value })
              }
            />
            <Input
              type="text"
              placeholder="id"
              value={userInfo.id}
              onChange={(e) => setUserInfo({ ...userInfo, id: e.target.value })}
            />
            <Input
              type="password"
              placeholder="Password"
              value={userInfo.pw}
              onChange={(e) => setUserInfo({ ...userInfo, pw: e.target.value })}
            />
            <Button onClick={handleClickSignIn}>Sign</Button>
          </form>
        </>
      )}
    </Container>
  );
}

export default SigninPage;

const Container = styled.div`
  padding: 0 120px;

  > form {
    display: flex;
    flex-direction: column;
    gap: 60px;
  }

  h2 {
    text-align: center;
    letter-spacing: 2px;
    color: white;
    font-size: 42px;
    padding-bottom: 20px;
  }
`;

const Input = styled.input`
  height: 70px;
  padding: 5px 20px;
  border-radius: 4px;
  background-color: #333333;
  border: none;
  color: white;
  font-size: 20px;
`;

const Button = styled.button`
  height: 70px;
  margin: 30px 0;
  border: none;
  background-color: #c50f0f;
  border-radius: 6px;
  color: white;
  font-size: 20px;
  cursor: pointer;
  letter-spacing: 1px;

  &:hover {
    background-color: #ffffffd9;
    color: black;
    font-weight: 600;
  }
`;
