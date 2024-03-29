import { useState } from "react";
import ProjectCard from "../projectsCard";
import ProjectInfoModal from "../projectsInfoModal";
import { projects } from "../constants";
export const Projects = () => {
  const [modal, setModal] = useState(undefined);
  return (
    <>
      <div className="projects">
        <div className="card-wrapper">
          {projects
            .slice(0)
            .reverse()
            .map((p) => {
              return (
                <ProjectCard
                  key={p.name}
                  cardInfo={p}
                  setModal={setModal}
                />
              );
            })}
        </div>
      </div>
      {modal !== undefined && (
        <ProjectInfoModal modal={modal} setModal={setModal} />
      )}
    </>
  );
};
