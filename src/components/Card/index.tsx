import { ImgBackground } from "./styles";

interface CardProps {
  name: string;
  url: string;
  description: string;
}

export function Card({name, description, url }: CardProps) {
  return (
    <>
      <ImgBackground imgBackground={url ? url : "MARVEL-logo.svg"}>
        <section>
          <h3>{name}</h3>
          <p>
            {description}
          </p>
          <footer>
            <a href="/">ver detalhes</a>
          </footer>
        </section>
      </ImgBackground>
    </>
  );
}
