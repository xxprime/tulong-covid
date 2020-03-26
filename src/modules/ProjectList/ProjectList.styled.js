import styled from "@emotion/styled";
import { Layout, Pagination as antPagination  } from "antd";

const { Content: antContent } = Layout;

export const Content = styled(antContent)`
  padding: 25px 50px 0px 50px;
`;

export const Wrapper = styled.div`
  background: #fff;
  padding: 24px;
  min-height: 600px;
`;
export const Pagination = styled(antPagination)`
  margin: 0 auto;
  display:inline-block;
  padding: 25px 50px 0px 50px;
`;