import React from "react";
import "./index.css";

import { Content, Wrapper } from "./ProjectList.styled";

import ProjectCard from "./ProjectCard";
import cards from "./mockData";

const ProjectList = ({ locationFilter }) => {
  return (
    <div className="content">
      <Content>
        <Wrapper>
          {locationFilter.length !== 0
            ? cards
                .filter(card =>
                  card.locations.some(location =>
                    locationFilter.includes(location)
                  )
                )
                .map(card => (
                  <ProjectCard
                    title={card.title}
                    helpTags={card.helpTags}
                    description={card.description}
                    typeTags={card.typeTags}
                    locations={card.locations}
                  />
                ))
            : cards.map(card => (
                <ProjectCard
                  title={card.title}
                  helpTags={card.helpTags}
                  description={card.description}
                  typeTags={card.typeTags}
                  locations={card.locations}
                />
              ))}
        </Wrapper>
      </Content>
    </div>
  );
};

export default ProjectList;
