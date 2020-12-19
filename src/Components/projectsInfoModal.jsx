import React from "react";
export default function ProjectsInfoModal(props) {
  return (
    <div className="projects-modal-wrapper" onClick={() => props.setModal(undefined)}>
      <div className="projects-info-modal" >
        <div>
          <img src={props.modal.thumbnail} alt="Modal" id={`${props.modal.name.replace(/ /g, '')}`}/>
        </div>
        <h4>{props.modal.name}</h4>
        <p>{props.modal.blurb}</p>
      </div>
    </div>
  );
}
