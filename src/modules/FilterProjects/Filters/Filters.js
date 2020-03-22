import React from "react";

import FilterLocationTags from "./FilterLocationTags";

import { Content, Wrapper } from "./Filters.styled";

const Filters = ({ setLocationFilter, locationFilter }) => {
  return (
    <Content>
      <Wrapper>
        <h3>Filter by location</h3>
        <FilterLocationTags
          locations={[
            { color: "red", locations: "Manila" },
            { color: "red", locations: "Quezon" },
          ]}
          setLocationFilter={setLocationFilter}
          locationFilter={locationFilter}
        />
      </Wrapper>
    </Content>
  );
};

export default Filters;
