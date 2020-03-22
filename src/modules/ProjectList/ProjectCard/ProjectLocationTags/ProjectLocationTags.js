import React from "react";
import { Tag } from "antd";
import { EnvironmentFilled } from "@ant-design/icons";

import { LocationWrapper } from "./ProjectLocationTags.styled";

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

export default ProjectLocationTags;
