import React from "react";
import { Container } from "./styles";

type ModalProps = {
  children: any;
  show: boolean;
  handleClose: () => void;
};

export const Modal = ({ handleClose, show, children }: ModalProps) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <Container className={showHideClassName}>
      <section className="modal-main">
        <div>{children}</div>
        <button type="button" onClick={handleClose}>
          Close
        </button>
      </section>
    </Container>
  );
};
