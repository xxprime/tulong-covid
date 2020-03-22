import React from "react";
import { Typography } from "antd";

const { Paragraph } = Typography;

const ProjectDescription = ({ description }) => (
  <div>
    {description.map(description => (
      <Paragraph>{description}</Paragraph>
    ))}
  </div>
);

export default ProjectDescription;
