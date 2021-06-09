import md5 from "md5";
import { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar";
import { SelfCarousel } from "../../components/SelfCarousel";
import { apiMARVEL } from "../../services/api";
import { HomeContainer } from "../Characters/styles";
type ComicShape = {
  id: number;
  name: string;
  description: string;
  path: string;
};

export function HQs() {
  const [hqs, setHqs] = useState<ComicShape[]>([]);
  const ts = Number(new Date());

  const hash = md5(
    String(ts) +
      process.env.REACT_APP_MARVEL_PRIVATE_KEY +
      process.env.REACT_APP_MARVEL_PUBLIC_KEY
  );

  useEffect(() => {
    apiMARVEL
      .get(
        `/comics?ts=${String(ts)}&apikey=${
          process.env.REACT_APP_MARVEL_PUBLIC_KEY
        }&hash=${hash}`
      )
      .then((response) => {
        console.log(response.data.data.results);
        const comics = response.data.data.results.map(
          (comic: {
            id: number;
            title: string;
            description: string;
            thumbnail: { path: string; extension: string };
          }) => {
            return {
              id: comic.id,
              name: comic.title,
              description: comic.description,
              path:
                comic.thumbnail.path ===
                "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
                  ? "MARVEL-logo.svg"
                  : comic.thumbnail.path +
                    "/portrait_xlarge." +
                    comic.thumbnail.extension,
            };
          }
        );
        setHqs(comics);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <HomeContainer>
      <Navbar />
      <SelfCarousel individualContent={hqs} />
    </HomeContainer>
  );
}
