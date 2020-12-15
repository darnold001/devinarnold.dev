import React from "react";

export default function Modal(props) {
    const {exitModal} = props;
  return (
    <div className='modal' onClick={exitModal}>
      <div className="modal-window">
        <h3>{props.text}</h3>
      </div>
    </div>
  );
}
