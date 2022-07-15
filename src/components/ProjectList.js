import React from "react";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  const projItem = projects.map((item) => 
  <ProjectItem key={item.id} name={item.name} about={item.about} technologies={item.technologies} />
  )
  console.log(projects);
  return (
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list">{/* render ProjectItem components here */ }
        {projItem}
      </div>
    </div>
  );
}

export default ProjectList;
