import React from "react";
import styled from "@emotion/styled";
import "./index.css";
import { PageHeader, Tag, Typography, Row } from "antd";
import { EnvironmentFilled } from "@ant-design/icons";

import { Card } from "./ProjectCard.styled";

const { Paragraph } = Typography;

const ProjectDescription = ({ description }) => (
  <div>
    {description.map(description => (
      <Paragraph>{description}</Paragraph>
    ))}
  </div>
);

const ProjectHelpTags = ({ helpTags }) => (
  <div>
    {helpTags.map(helpTag => (
      <Tag color="blue">{helpTag}</Tag>
    ))}
  </div>
);

const ProjectTypeTags = ({ typeTags }) => (
  <Wrapper>
    {typeTags.map(typeTag => (
      <Tag color="red">{typeTag}</Tag>
    ))}
  </Wrapper>
);

const ProjectLocationTags = ({ locations }) => (
  <div>
    <EnvironmentFilled />
    <LocationWrapper>
      {locations.map(location => (
        <Tag color="red">{location}</Tag>
      ))}
    </LocationWrapper>
  </div>
);

const Wrapper = styled.div`
  padding-left: 30px;
  margin-bottom: 20px;
`;

const LocationWrapper = styled.div`
  padding-left: 20px;
  display: inline;
`;

// const Content = ({ children, extraContent }) => {
//   return (
//     <Row>
//       <div style={{ flex: 1 }}>{children}</div>
//       <div className="image">{extraContent}</div>
//     </Row>
//   );
// };

const ProjectCard = ({ title, helpTags, description, typeTags, locations }) => (
  <Card>
    <PageHeader
      title={title}
      className="site-page-header"
      subTitle="Looking for:"
      tags={<ProjectHelpTags helpTags={helpTags} />}
    >
      <ProjectDescription description={description} />
      {/*<ProjectTypeTags typeTags={typeTags} />*/}
      <ProjectLocationTags locations={locations} />
    </PageHeader>
  </Card>
);

export default ProjectCard;
