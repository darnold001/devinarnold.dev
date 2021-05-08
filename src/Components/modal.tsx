import React from "react";

interface ModalProps{
  exitModal: () => void;
  message: string
}

export default function Modal(props: ModalProps) {
    const {exitModal} = props;
  return (
    <div className='modal' onClick={exitModal}>
      <div className="modal-window">
        <h3>{props.message}</h3>
      </div>
    </div>
  );
}
