import React from "react";
import { Layout } from "antd";

import { Logo, HeadingTitle, Menu, Header } from "./MainLayout.styled";

const { Content, Footer } = Layout;

const MainLayout = ({ children }) => (
  <Layout>
    <Header>
      <Logo />
      <HeadingTitle>Tulong COVID</HeadingTitle>
      <Menu
        theme="light"
        mode="horizontal"
        defaultSelectedKeys={["1"]}
        style={{ lineHeight: "64px" }}
      >
        <Menu.Item key="1">All Projects</Menu.Item>
        <Menu.Item key="2">Volunteers</Menu.Item>
        <Menu.Item key="3">Join our FB Group</Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: "50px 50px 0px 50px" }}>
      <div style={{ background: "#fff", padding: 24, minHeight: 600 }}>
        {children}
      </div>
    </Content>
    <Footer style={{ textAlign: "center" }}>Tulong Covid ©2020</Footer>
  </Layout>
);

export default MainLayout;
