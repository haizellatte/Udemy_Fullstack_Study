import React, { useState } from "react";
import styled from "styled-components";
import { useProfile } from "../../../contexts/Profile.context";

function Setting() {
  const { nickname, setNickname } = useProfile();
  const [changeNickname, setChangeNickname] = useState(nickname);

  const handleChangeNickName = () => {
    if (changeNickname === "") {
      alert("닉네임을 입력하세요.");
    } else if (changeNickname === nickname) {
      alert("동일한 닉네임명입니다.");
    } else {
      setNickname(changeNickname);
    }
  };

  return (
    <>
      <Section>
        <h2>닉네임 변경</h2>
        <Input
          type="text"
          value={changeNickname}
          onChange={(e) => setChangeNickname(e.target.value)}
        />
        <Button onClick={handleChangeNickName}>Enter</Button>
      </Section>
    </>
  );
}

export default Setting;

const Section = styled.section`
  border-bottom: 1px solid #ffffff37;
  padding-bottom: 70px;
`;

const Input = styled.input`
  height: 50px;
  width: 400px;
  border: none;
  font-size: 20px;
  margin-right: 30px;
  height: 60px;
  padding: 5px 20px;
  border-radius: 4px;
  background-color: #333333;
  color: white;
`;

const Button = styled.button`
  height: 60px;
  font-size: 18px;
  border: none;
  padding: 0 30px;
  cursor: pointer;
  background-color: #c50f0f;
  border-radius: 6px;
  color: white;
  &:hover {
    background-color: #ffffffd9;
    color: black;
    font-weight: 600;
  }
`;
