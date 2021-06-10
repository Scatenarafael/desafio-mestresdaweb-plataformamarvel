import React from "react";
import Modal from "react-modal";
import { Container } from "./styles";
import { FiXCircle } from "react-icons/fi";

export interface ModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
  name: string;
  description: string;
  url: string;
  participations?: string[];
}

export function NewDetailsModal({
  isOpen,
  onRequestClose,
  name,
  description,
  url,
  participations,
}: ModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Container bgImage={url}>
        <div className="listSide">
          <h2>{name}</h2>
          {participations ? (
            <ul>
              <li>Participations:</li>
              {participations?.map((participation) => {
                return <li key={participation}>{participation}</li>;
              })}
            </ul>
          ) : (
            <>
              <h3>Description</h3>
              <p>{description}</p>
            </>
          )}
        </div>
        <div className="imageSide">
          <button onClick={onRequestClose}>
            <FiXCircle size={30} color={"black"} />
          </button>
        </div>
      </Container>
    </Modal>
  );
}
