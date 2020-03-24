import React from "react";
import { Tag } from "antd";

const ProjectHelpTags = ({ helpTags }) => (
  <div>
    {helpTags.map(helpTag => (
      <Tag color="var(--royal-blue)">{helpTag}</Tag>
    ))}
  </div>
);

export default ProjectHelpTags;
