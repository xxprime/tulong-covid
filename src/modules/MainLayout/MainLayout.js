import React from "react";
import { Layout } from "antd";

import { Header, Logo, HeadingTitle, Menu, Footer } from "./MainLayout.styled";

const MainLayout = ({ children }) => (
  <Layout>
    <Header>
      <Logo />
      <HeadingTitle>Tulong COVID</HeadingTitle>
      <Menu theme="light" mode="horizontal" defaultSelectedKeys={["1"]}>
        <Menu.Item key="1">All Projects</Menu.Item>
        <Menu.Item key="2">Volunteers</Menu.Item>
        <Menu.Item key="3">Join our FB Group</Menu.Item>
      </Menu>
    </Header>
    {children}
    <Footer>Tulong Covid ©2020</Footer>
  </Layout>
);

export default MainLayout;
