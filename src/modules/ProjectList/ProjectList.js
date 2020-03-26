import React,{useState, useEffect} from "react";
import "./index.css";

import { Content, Wrapper,Pagination} from "./ProjectList.styled";

import ProjectCard from "./ProjectCard";
import cards from "./mockData";

const ProjectList = ({ locationFilter }) => {

  const [paginationPage, setPaginationPage] = useState(1);

  const [paginationSize, setPaginationSize] = useState(8);

  const filteredCards = cards.filter(card =>card.locations.some(location =>locationFilter.includes(location)));

     useEffect(() =>{
       setPaginationPage(1);
     },[locationFilter]);
 
  return (
    <div>
      <div className="content">
        <Content>
          <Wrapper>
            {locationFilter.length !== 0
              ? filteredCards
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
        
        </Content>
      </div>
      <div classname='Pagination'>
        <Pagination
          current={paginationPage} 
          total={(locationFilter.length !== 0 )? filteredCards.length : cards.length} 
          pageSize={paginationSize}
          defaultCurrent={1}
          showTotal={(total, range) => `${range[0]}-${range[1]} of ${total} items`}
          onChange = {(page,pageSize) =>{
            setPaginationPage(page);
            setPaginationSize(pageSize);
          }}
          /> 
      </div>
    </div>
  );
};

export default ProjectList;
