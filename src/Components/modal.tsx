export default function Modal(props: {message: string, exitModal: () => void}) {
    const {exitModal} = props;
  return (
    <div className='modal' onClick={exitModal}>
      <div className="modal-window">
        <h3>{props.message}</h3>
      </div>
    </div>
  );
}
