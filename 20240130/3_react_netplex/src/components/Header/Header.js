import React from "react";
import styled from "styled-components";

function Header() {
  return (
    <div>
      <Text>NETFLEX</Text>
    </div>
  );
}

export default Header;

const Text = styled.div`
  color: #c50f0f;
  font-size: 48px;
  font-weight: 800;
  padding: 30px 0 50px 0;
`;
