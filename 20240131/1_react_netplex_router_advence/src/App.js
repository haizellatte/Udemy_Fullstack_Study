import React from "react";
import styled from "styled-components";
import Homepage from "./pages/Homepage";
import { Route, Routes } from "react-router-dom";
import SigninPage from "./pages/SigninPage";
import DefaultLayout from "./layouts/DefaultLayout";
import MoviesDetailPage from "./pages/MoviesDetailPage";
import { AuthProvider } from "./contexts/Auth.context";
import MyPage from "./pages/MyPage";
import { ProfileProvider } from "./contexts/Profile.context";

function App() {
  return (
    <Wrapper>
      <AuthProvider>
        <ProfileProvider>
          <Routes>
            <Route element={<DefaultLayout />}>
              <Route path="/" element={<Homepage />} />
              <Route path="/sign-in" element={<SigninPage />} />
              <Route path="/movies/:movieId" element={<MoviesDetailPage />} />
              <Route path="/my-page" element={<MyPage />} />
            </Route>
          </Routes>
        </ProfileProvider>
      </AuthProvider>
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div`
  color: white;
  padding: 0 30px;
  padding-top: 50px;
  margin-top: 75px;
`;
