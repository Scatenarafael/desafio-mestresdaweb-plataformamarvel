import { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar";
import { HomeContainer } from "./styles";
import { apiMARVEL } from "../../services/api";
import md5 from "md5";
import { SelfCarousel } from "../../components/SelfCarousel";
type CharacterShape = {
  id: number;
  name: string;
  description: string;
  path: string;
};

export function Characters() {
  const [characters, setCharacters] = useState<CharacterShape[]>([]);
  const ts = Number(new Date());

  const hash = md5(
    String(ts) +
      process.env.REACT_APP_MARVEL_PRIVATE_KEY +
      process.env.REACT_APP_MARVEL_PUBLIC_KEY
  );

  useEffect(() => {
    apiMARVEL
      .get(
        `/characters?ts=${String(ts)}&apikey=${
          process.env.REACT_APP_MARVEL_PUBLIC_KEY
        }&hash=${hash}`
      )
      .then((response) => {
        console.log(response.data.data.results);
        const chars = response.data.data.results.map(
          (ch: {
            id: number;
            name: string;
            description: string;
            thumbnail: { path: string; extension: string };
          }) => {
            return {
              id: ch.id,
              name: ch.name,
              description: ch.description,
              path:
                ch.thumbnail.path ===
                "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
                  ? "MARVEL-logo.svg"
                  : ch.thumbnail.path +
                    "/portrait_xlarge." +
                    ch.thumbnail.extension,
            };
          }
        );
        setCharacters(chars);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <HomeContainer>
      <Navbar />
      <SelfCarousel individualContent={characters} />
    </HomeContainer>
  );
}
