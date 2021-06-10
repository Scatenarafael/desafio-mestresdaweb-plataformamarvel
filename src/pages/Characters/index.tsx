import { useEffect, useState } from "react";
import { Navbar } from "../../components/Navbar";
import { HomeContainer } from "./styles";
import { SelfCarousel } from "../../components/SelfCarousel";
import { useDispatch, useSelector } from "react-redux";
import { StateShape } from "../../store/ducks/reducer";
import { getAllCharacters } from "../../store/fetchActions";

export function Characters() {
  const characters = useSelector<StateShape, StateShape["characters"]>(
    (state) => state.characters
  );
  const dispatch = useDispatch();
  // const [characters, setCharacters] = useState<CharacterShape[]>([]);

  useEffect(() => {
    dispatch(getAllCharacters());
    // apiMARVEL
    //   .get(
    //     `/characters?ts=${String(ts)}&apikey=${
    //       process.env.REACT_APP_MARVEL_PUBLIC_KEY
    //     }&hash=${hash}`
    //   )
    //   .then((response) => {
    //     console.log(response.data.data.results);
    //     const chars = response.data.data.results.map(
    //       (ch: {
    //         id: number;
    //         name: string;
    //         description: string;
    //         thumbnail: { path: string; extension: string };
    //       }) => {
    //         return {
    //           id: ch.id,
    //           name: ch.name,
    //           description: ch.description,
    //           path:
    //             ch.thumbnail.path ===
    //             "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
    //               ? "MARVEL-logo.svg"
    //               : ch.thumbnail.path +
    //                 "/portrait_xlarge." +
    //                 ch.thumbnail.extension,
    //         };
    //       }
    //     );
    //     setCharacters(chars);
    //   })
    //   .catch((err) => console.log(err));
  }, []);

  return (
    <HomeContainer>
      <Navbar />
      <SelfCarousel individualContent={characters} />
    </HomeContainer>
  );
}
