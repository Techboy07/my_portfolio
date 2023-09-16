import HeadingText from "../components/HeadingText";

import Paragraph from "../components/Paragraph";
import { useEffect, useState } from "react";

import ProjectCard from "../components/ProjectCard";
import { project } from "../../mytypes";
import { stateObject } from "../App";

const ProjectPage = ({ state }: { state: stateObject }) => {
  const [projects, setProjects] = useState<project[]>([...state.projects]);

  const projs = state.projects;

  useEffect(() => {
    setProjects(projs);
  }, [projs]);

  return (
    <>
      <section id="projects" className="px-5 lg:px-24 container mx-auto">
        <div className="pt-24 pb-16">
          <HeadingText headingText={"projects"} />
        </div>

        <Paragraph
          paragraphText={
            "The projects below are a combination of personal and client projects to showcase the value I can bring to your projects."
          }
          color={"text-center mb-32"}
        />

        <div className="">
          {projects.map((project, idx) => (
            <div key={idx} className="pb-32">
              <ProjectCard
                projectName={project.projectName}
                imageLink={project.projectImage}
                description={project.projectDescription}
                livePage={project.live}
                sourceCode={project.sourceCode}
              />
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default ProjectPage;
