import Carousel from "./Carousel";
import { CardInfo } from "./Types";
export default function ProjectsInfoModal(props: {
  modal: CardInfo;
  setModal: (arg: any) => void;
}) {
  return (
    <div className="projects-modal-wrapper">
      <div className="projects-info-modal">
        <button className="closeIcon" onClick={() => props.setModal(undefined)}>
          ✖
        </button>
        <div>
          {props.modal.photos.length > 1 && (
            <Carousel images={props.modal.photos} />
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
        <div className="project-description">
          <p>{props.modal.blurb}</p>
        </div>
      </div>
    </div>
  );
}
