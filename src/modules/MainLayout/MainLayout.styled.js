import styled from "@emotion/styled";
import { Menu as antMenu, Layout as antLayout } from "antd";

const { Header: antHeader } = antLayout;

export const Header = styled(antHeader)`
  background: #fff;
`;

export const Logo = styled.div`
  width: 120px;
  height: 31px;
  background: rgb(96, 96, 96);
  margin: 16px 24px 16px 0;
  float: left;
`;

export const HeadingTitle = styled.h1`
  font-family: Arial, Helvetica, sans-serif;
`;

export const Menu = styled(antMenu)`
  position: absolute;
  left: 70%;
  top: 0%;
`;

Menu.Item = antMenu.Item;
