import React from "react";
import { Outlet } from "react-router-dom";
import styled from "styled-components";
import Header from "../../components/Header";

function DefaultLayout() {
  return (
    <Layout>
      <Header />
      <Outlet />
    </Layout>
  );
}

export default DefaultLayout;

const Layout = styled.div`
  padding: 0 30px;
  color: white;
`;
