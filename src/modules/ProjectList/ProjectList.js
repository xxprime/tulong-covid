import React,{useState} from "react";
import "./index.css";

import { Content, Wrapper,Pagination} from "./ProjectList.styled";

import ProjectCard from "./ProjectCard";
import cards from "./mockData";

const ProjectList = ({ locationFilter }) => {
  const [paginationPage, setPaginationPage] = useState(1);
  const [paginationSize, setPaginationSize] = useState(4);
 
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
                ).slice((paginationPage-1) * paginationSize
                  ,paginationPage * paginationSize
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
            : cards
                .slice((paginationPage-1) * paginationSize
                  ,paginationPage * paginationSize
                )
                .map(card => (
                <ProjectCard
                  title={card.title}
                  helpTags={card.helpTags}
                  description={card.description}
                  typeTags={card.typeTags}
                  locations={card.locations}
                />
              ))}
        </Wrapper>
        <Pagination 
        total={cards.length} 
        pageSize={paginationSize}
        defaultCurrent={1}
        showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
        onChange = {(page,pageSize) =>{
          setPaginationPage(page);
          setPaginationSize(pageSize);
        }}
        /> 
              


       
      </Content>
    </div>
  );
};

export default ProjectList;
