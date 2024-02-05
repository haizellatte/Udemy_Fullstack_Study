import React from "react";

interface ProfileProps {
  name: string;
  nickname: string;
  age: number;
  gender: "male" | "female";
}

function Profile({ name, nickname, age, gender }: ProfileProps) {
  return (
    <div>
      <ul>
        <li>{name}</li>
        <li>{nickname}</li>
        <li>{age}</li>
        <li>{gender}</li>
      </ul>
    </div>
  );
}

export default Profile;
