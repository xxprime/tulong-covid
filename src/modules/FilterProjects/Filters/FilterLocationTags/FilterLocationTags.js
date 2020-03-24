import React from "react";

import { Wrapper, Tag } from "./FilterLocationTags.styled";

const handleFilter = (setLocationFilter, locationFilter, location) => {
  if (locationFilter.some(filter => filter === location)) {
    setLocationFilter(locationFilter.filter(filter => filter !== location));
  } else {
    setLocationFilter([...locationFilter, location]);
  }
};

const FilterLocationTags = ({
  locations,
  setLocationFilter,
  locationFilter,
}) => {
  return (
    <Wrapper>
      {locations.map(location => (
        // TODO: Add closable tag
        <Tag
          color="var(--indian-red)"
          onClick={() => {
            handleFilter(setLocationFilter, locationFilter, location.locations);
          }}
        >
          {location.locations}
        </Tag>
      ))}
    </Wrapper>
  );
};

export default FilterLocationTags;
