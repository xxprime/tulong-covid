import React from "react";
import { Tag } from "antd";

import { Wrapper } from "./ProjectTypeTags.styled";

const ProjectTypeTags = ({ typeTags }) => (
  <Wrapper>
    {typeTags.map(typeTag => (
      <Tag color="red">{typeTag}</Tag>
    ))}
  </Wrapper>
);

export default ProjectTypeTags;
