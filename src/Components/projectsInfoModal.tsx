import React from "react";
import Carousel from "./Carousel";
import closeIcon from "./Images/modal_close.jpg";
import { CardInfo } from "./Types";
export default function ProjectsInfoModal(props: {
  modal: CardInfo;
  setModal: (arg: any) => void;
}) {
  return (
    <div className="projects-modal-wrapper">
      <div className="projects-info-modal">
        <img
          className="closeIcon"
          src={closeIcon}
          alt="close icon"
          onClick={() => props.setModal(undefined)}
        />
        <div>
          {props.modal.photos.length > 1 && (
            <Carousel photos={props.modal.photos} />
          )}
          {props.modal.photos.length < 2 && (
            <img
              src={props.modal.thumbnail}
              alt="Modal"
              id={`${props.modal.name.replace(/ /g, "")}`}
            />
          )}
        </div>
        <h4>{props.modal.name}</h4>
        <p>{props.modal.blurb}</p>
      </div>
    </div>
  );
}
