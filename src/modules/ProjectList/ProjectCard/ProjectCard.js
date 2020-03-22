import React from "react";
import { PageHeader } from "antd";

import ProjectHelpTags from "./ProjectHelpTags";
import ProjectDescription from "./ProjectDescription";
import ProjectLocationTags from "./ProjectLocationTags";

import { Card } from "./ProjectCard.styled";

const ProjectCard = ({ title, helpTags, description, locations }) => (
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
