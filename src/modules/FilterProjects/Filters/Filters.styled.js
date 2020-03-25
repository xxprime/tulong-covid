import styled from "@emotion/styled";
import { Layout as antLayout } from "antd";

const { Content: antContent } = antLayout;

export const Content = styled(antContent)`
  padding: 25px 50px 0px 0px;
`;

export const Wrapper = styled.div`
  background: var(--white);
  padding: 24px;
  min-height: 100px;
`;
