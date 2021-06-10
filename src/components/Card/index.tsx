import { useState } from "react";
import { ImgBackground } from "./styles";
import { NewDetailsModal } from '../NewDetailsModal' 

export interface CardProps {
  name: string;
  url: string;
  description: string;
  participations?: string[];
}

export function Card({ name, description, url, participations }: CardProps) {
  const [isDetailsModalOpen, setIsDetailsModalOpen] = useState(false);

  function handleOpenNewDetailsModal() {
    setIsDetailsModalOpen(true);
  }
  function handleCloseNewDetailsModal() {
    setIsDetailsModalOpen(false);
  }
  return (
    <>
      <ImgBackground imgBackground={url ? url : "MARVEL-logo.svg"}>
        <section>
          <h3>{name}</h3>
          <p>{description}</p>
          <footer>
            <button onClick={handleOpenNewDetailsModal}>ver detalhes</button>
          </footer>
          <NewDetailsModal
            isOpen={isDetailsModalOpen}
            onRequestClose={handleCloseNewDetailsModal}
            name={name}
            description={description}
            url={url}
            participations={participations}
          />
        </section>
      </ImgBackground>
    </>
  );
}
