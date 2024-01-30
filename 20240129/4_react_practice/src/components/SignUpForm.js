import React, { useState } from "react";
import styled from "styled-components";

function SignUpForm() {
  const [data, setData] = useState({
    id: "",
    password: "",
    confirm: "",
    nickname: "",
    gender: "",
  });

  const onChangeGender = (e, value) => {
    if (e.target.checked) {
      setData({ ...data, gender: value });
    }
  };

  const handleClickSignUp = () => {
    if (data.password !== data.confirm) {
      return alert("Password not Confirm!");
    }
    console.log(data);
  };

  return (
    <div>
      <h2>Sign-Up Form</h2>
      <form
        onSubmit={(e) => e.preventDefault}
        style={{
          display: "flex",
          flexDirection: "column",
          maxWidth: 200,
          margin: "0 auto",
          rowGap: 12,
        }}
      >
        <Input
          name="id"
          type="text"
          placeholder="ID"
          value={data.id}
          onChange={(e) => setData({ ...data, id: e.target.value })}
        />
        <Input
          name="password"
          type="password"
          placeholder="PASSWORD"
          value={data.password}
          onChange={(e) => setData({ ...data, password: e.target.value })}
        />
        <Input
          name="password-confirm"
          type="password"
          placeholder="CONFIRM PASSWORD"
          value={data.confirm}
          onChange={(e) => setData({ ...data, confirm: e.target.value })}
        />
        <Input
          type="text"
          placeholder="NICKNAME"
          value={data.nickname}
          onChange={(e) => setData({ ...data, nickname: e.target.value })}
        />
        <RadioContainer>
          <Input
            id="gender-female"
            name="gender"
            type="radio"
            value={"Female"}
            onChange={(e) => onChangeGender(e, "female")}
          ></Input>
          <label htmlFor="gender-female">Female</label>
          <Input
            id="gender-male"
            name="gender"
            type="radio"
            value={"Male"}
            onChange={(e) => onChangeGender(e, "male")}
          ></Input>
          <label htmlFor="gender-male">Male</label>
        </RadioContainer>
        <Button onClick={handleClickSignUp}>Sign Up</Button>
      </form>
    </div>
  );
}

export default SignUpForm;

const Input = styled.input`
  padding: 7px 5px;
`;

const RadioContainer = styled.div`
  display: flex;
  justify-content: space-around;
`;

const Button = styled.button`
  margin-top: 20px;
  padding: 7px 10px;
  border: 1px solid black;
`;
