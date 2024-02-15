import React, { useRef } from "react";
import ProjectGallary from "../project-gallary/ProjectGallary";
import Carousel from "../carousel-with-pagination/Carousel";

const Projects = () => {
  const projectRef = useRef();
  const teams = [
    "team 1",
    "team 2",
    "team 3",
    "team 4",
    "team 5",
    "team 6",
    "team 7",
    "team 1",
    "team 2",
    "team 3",
    "team 4",
    "team 5",
    "team 6",
    "team 7",
    "team 1",
    "team 2",
    "team 3",
    "team 4",
    "team 5",
    "team 6",
    "team 7",
  ];
  return (
    <div className="projects container mx-auto my-8 text-center max-sm:p-4 overflow-hidden ">
      <div className="text-box mb-6">
        <h2 className="greetings text-primary text-4xl font-semibold max-[1100px]:text-3xl max-[1000px]:text-2xl mb-2">
          Some of the <span className="text-main">Solution Challenge </span>
          Al-Azhar University
          <span className="text-main"> projects</span>
        </h2>
        <p className="text-textShade text-lg ">
          Some of the projects have an impact all over the world
        </p>
      </div>
      <Carousel items={teams} className="" slideRef={projectRef}>
        {teams.map((team, i) => (
          <ProjectGallary key={i} prjectRef={i === 0 ? projectRef : null} />
        ))}
      </Carousel>
    </div>
  );
};

export default Projects;
