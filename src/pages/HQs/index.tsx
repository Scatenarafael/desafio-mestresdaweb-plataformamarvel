import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar } from "../../components/Navbar";
import { SelfCarousel } from "../../components/SelfCarousel";
import { StateShape } from "../../store/ducks/reducer";
import { getAllHQS } from "../../store/fetchActions";
import { HomeContainer } from "../Characters/styles";

export function HQs() {
  const hqs = useSelector<StateShape, StateShape["hqs"]>((state) => state.hqs);
  const dispatch = useDispatch();
  // const [hqs, setHqs] = useState<ComicShape[]>([]);

  useEffect(() => {
    dispatch(getAllHQS());
    // apiMARVEL
    //   .get(
    //     `/comics?ts=${String(ts)}&apikey=${
    //       process.env.REACT_APP_MARVEL_PUBLIC_KEY
    //     }&hash=${hash}`
    //   )
    //   .then((response) => {
    //     console.log(response.data.data.results);
    //     const comics = response.data.data.results.map(
    //       (comic: {
    //         id: number;
    //         title: string;
    //         description: string;
    //         thumbnail: { path: string; extension: string };
    //       }) => {
    //         return {
    //           id: comic.id,
    //           name: comic.title,
    //           description: comic.description,
    //           path:
    //             comic.thumbnail.path ===
    //             "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
    //               ? "MARVEL-logo.svg"
    //               : comic.thumbnail.path +
    //                 "/portrait_xlarge." +
    //                 comic.thumbnail.extension,
    //         };
    //       }
    //     );
    //     setHqs(comics);
    //   })
    //   .catch((err) => console.log(err));
  }, []);
  return (
    <HomeContainer>
      <Navbar />
      <SelfCarousel individualContent={hqs} />
    </HomeContainer>
  );
}
