import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { PROJECT_DATA } from "../../utils/Constant";

const Project = () => {
  const [projectData, setProjectData] = useState();
  useEffect(() => {
    setProjectData(PROJECT_DATA);
  }, []);
  
  return (
    <div
      id="project"
      className="pt-10 flex flex-wrap flex-col pb-20 gap-6 bg-gray-50"

    >
      <div className="text-center">
        <h1 className="text-3xl font-bold text-blue-600">PROJECTS</h1>

        <p className="text-xl font-semibold mt-2">

          Each project is a unique piece of development 🧩
        </p>
      </div>

      {projectData?.map((item, index) => (
        <ProjectCard key={index} data={item}></ProjectCard>
      ))}
    </div>
  );
};

export default Project;
