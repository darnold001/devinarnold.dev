import { CardInfo } from "./Types";

export default function ProjectCard(props: {
  cardInfo: CardInfo;
  setModal: (arg0: any) => void;
}) {
  const { cardInfo, setModal } = props;
  return (
    <button
      className="projects-card"
      onClick={() => setModal(cardInfo)}
    >
      <div>
        <img
          src={`${cardInfo.thumbnail}`}
          alt="project thumbnail"
          id={`${cardInfo.name}`}
        />
      </div>
      <h4>{cardInfo.name}</h4>
    </button>
  );
}
