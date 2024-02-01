import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useAuth } from "../../contexts/Auth.context";
import { useProfile } from "../../contexts/Profile.context";

function Header() {
  const { isLogin, logOut } = useAuth();
  const { nickname } = useProfile();
  const navigate = useNavigate();

  return (
    <HeadContainer>
      <Text onClick={() => navigate(`/`)}>HYOFLEX</Text>
      <MenuBar>
        <nav>
          <ul>
            {isLogin ? (
              <ul className="login-status-bar">
                <li className="nickname">{nickname}</li>
                <li className="menu" onClick={() => navigate(`/my-page`)}>
                  MyPage
                </li>
                <li className="menu" onClick={logOut}>
                  Log-out
                </li>
              </ul>
            ) : (
              <li className="menu" onClick={() => navigate(`/sign-in`)}>
                Log-in
              </li>
            )}
          </ul>
        </nav>
      </MenuBar>
    </HeadContainer>
  );
}

export default Header;

const HeadContainer = styled.div`
  display: flex;
  justify-content: space-between;
  z-index: 3;
  background-color: rebeccapurple;
  text-align: center;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  display: flex;
  background-color: rgba(0, 0, 0, 0.4);
  backdrop-filter: blur(3px);
  z-index: 100;
  padding: 15px 60px;
  width: 100%;
  > Link {
    text-decoration: none;
  }
`;

const Text = styled.div`
  color: #c50f0f;
  font-size: 52px;
  font-weight: 800;
  text-decoration: none;
  cursor: pointer;
  font-family: Verdana, Geneva, Tahoma, sans-serif;
`;

const MenuBar = styled.nav`
  display: flex;
  > ul {
    margin: auto auto;
  }
  .login-status-bar {
    display: flex;
    gap: 40px;
  }

  li {
    color: white;
    text-decoration: none;
    font-size: 24px;
    align-items: center;
    list-style: none;
  }

  .menu {
    cursor: pointer;
    transition: ease-in-out 0.3s;
    &:hover {
      color: #c50f0f;
    }
  }

  .nickname {
    border: 1px solid #c50f0f;
    background-color: #c50f0f;
    color: white;
    padding: 2px 15px;
    border-radius: 20px;
  }
`;
