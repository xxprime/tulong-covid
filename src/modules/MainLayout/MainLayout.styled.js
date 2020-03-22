import styled from "@emotion/styled";
import { Menu as antMenu, Layout as antLayout } from "antd";

const { Header: antHeader, Footer: antFooter } = antLayout;

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
  line-height: 64px;
`;

export const Footer = styled(antFooter)`
  text-align: center;
`;

Menu.Item = antMenu.Item;
