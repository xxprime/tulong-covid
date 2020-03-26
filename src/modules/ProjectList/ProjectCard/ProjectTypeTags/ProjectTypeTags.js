import React from "react";
import { Tag } from "antd";

import { Wrapper } from "./ProjectTypeTags.styled";

// NOTE: This component is not yet used
const ProjectTypeTags = ({ typeTags }) => (
  <Wrapper>
    {typeTags.map(typeTag => (
      <Tag color="var(--indian-red)">{typeTag}</Tag>
    ))}
  </Wrapper>
);

export default ProjectTypeTags;
