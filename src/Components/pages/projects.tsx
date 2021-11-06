import React, { useState } from "react";
import ProjectCard from "../projectsCard";
import ProjectInfoModal from "../projectsInfoModal";
import { projects } from "../constants";
export default function Projects() {
  const [modal, setModal] = useState(undefined);
  
  return (
    <>
      <div className="projects">
        <div className="card-wrapper">
          {projects.reverse().map((p) => {
            return (
              <ProjectCard key={p.name} cardInfo={p} setModal={setModal} />
            );
          })}
        </div>
      </div>
      {modal && (
        <ProjectInfoModal modal={modal} setModal={setModal} />
      )}
    </>
  );
}
