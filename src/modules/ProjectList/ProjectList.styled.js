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
 
  width: 100%;
  display:inline-block;
  align-items:center;
  vertical-align:middle;
  
`;