import styled from "@emotion/styled";
import { Layout } from "antd";

const { Content: antContent } = Layout;

export const Content = styled(antContent)`
  padding: 25px 50px 0px 50px;
`;

export const Wrapper = styled.div`
  background: var(--white);
  padding: 24px;
  min-height: 600px;
`;
