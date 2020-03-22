import React, { useState } from "react";

import MainLayout from "./modules/MainLayout";
import FilterProjects from "./modules/FilterProjects";
import ProjectList from "./modules/ProjectList";

function App() {
  // TODO: Implement redux
  const [locationFilter, setLocationFilter] = useState([]);

  return (
    <MainLayout>
      <FilterProjects
        setLocationFilter={setLocationFilter}
        locationFilter={locationFilter}
      />
      <ProjectList locationFilter={locationFilter} />
    </MainLayout>
  );
}

export default App;
