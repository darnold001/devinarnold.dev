import React from "react";
interface ProjectCardProps{
  cardInfo: {
    thumbnail:string
    name:string
  };
  setModal: Function
}

export default function ProjectCard(props: ProjectCardProps) {
  const { cardInfo, setModal } = props;
  return (
    <div className="projects-card" onClick ={() => setModal(cardInfo)}>
      <div>
        <img src={`${cardInfo.thumbnail}`} alt="project thumbnail" id={`${cardInfo.name}`}/>
      </div>
      <h4>{cardInfo.name}</h4>
    </div>
  );
}
