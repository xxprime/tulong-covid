import React from "react";
import "./index.css";
import { PageHeader, Button, Tag, Typography, Row } from "antd";

import { Card } from "./ProjectCard.styled";

const { Paragraph } = Typography;

const routes = [
  {
    path: "index",
    breadcrumbName: "First-level Menu",
  },
  {
    path: "first",
    breadcrumbName: "Second-level Menu",
  },
  {
    path: "second",
    breadcrumbName: "Third-level Menu",
  },
];

const IconLink = ({ src, text }) => (
  <a
    style={{
      marginRight: 16,
    }}
  >
    <img
      style={{
        marginRight: 8,
      }}
      src={src}
      alt={text}
    />
    {text}
  </a>
);

const ProjectDescription = ({ description }) => (
  <div>
    {description.map(description => (
      <Paragraph>{description}</Paragraph>
    ))}
  </div>
);

const ProjectTypeTags = ({ typeTags }) => (
  <div>
    {typeTags.map(typeTag => (
      <Tag color="red">{typeTag}</Tag>
    ))}
  </div>
);

const Content = ({ children, extraContent }) => {
  return (
    <Row>
      <div style={{ flex: 1 }}>{children}</div>
      <div className="image">{extraContent}</div>
    </Row>
  );
};

const ProjectCard = ({ title, helpTags, description, typeTags }) => (
  <Card>
    <PageHeader
      title={title}
      className="site-page-header"
      subTitle="Looking for:"
      tags={
        <div>
          {helpTags.map(helpTag => (
            <Tag color="blue">{helpTag}</Tag>
          ))}
        </div>
      }
      // extra={[
      //   <Button key="3">Operation</Button>,
      //   <Button key="2">Operation</Button>,
      //   <Button key="1" type="primary">
      //     Primary
      //   </Button>,
      // ]}
      breadcrumb={{ routes }}
    >
      <Content
        extraContent={
          <img
            src="https://gw.alipayobjects.com/zos/antfincdn/K%24NnlsB%26hz/pageHeader.svg"
            alt="content"
            width="100%"
          />
        }
      >
        <ProjectDescription description={description} />
        <ProjectTypeTags typeTags={typeTags} />
      </Content>
    </PageHeader>
  </Card>
);

export default ProjectCard;
