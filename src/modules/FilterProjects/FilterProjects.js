import React, { useState } from "react";
import { Button } from "antd";
import { FilterOutlined } from "@ant-design/icons";

import Filters from "./Filters";

import { Content } from "./FilterProjects.styled";

const FilterProjects = ({ setLocationFilter, locationFilter }) => {
  const [visible, setVisible] = useState(true);

  return (
    <Content>
      <Button icon={<FilterOutlined />} onClick={() => setVisible(!visible)}>
        Filter Projects
      </Button>
      {visible && (
        <Filters
          setLocationFilter={setLocationFilter}
          locationFilter={locationFilter}
        />
      )}
    </Content>
  );
};

export default FilterProjects;
