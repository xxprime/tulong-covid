import React from "react";

import { Content, Wrapper } from "./ProjectList.styled";

import ProjectCard from "./ProjectCard";
import cards from "./mockData";

const ProjectList = () => {
  return (
    <Content>
      <Wrapper>
        {cards.map(card => {
          console.log(card);
          return (
            <ProjectCard
              title={card.title}
              helpTags={card.helpTags}
              description={card.description}
              typeTags={card.typeTags}
              locations={card.locations}
            />
          );
        })}
      </Wrapper>
    </Content>
  );
};

export default ProjectList;
