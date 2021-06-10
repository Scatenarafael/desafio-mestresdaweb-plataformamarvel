import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navbar } from "../../components/Navbar";
import { SelfCarousel } from "../../components/SelfCarousel";
import { StateShape } from "../../store/ducks/reducer";
import { getAllMovies } from "../../store/fetchActions";
import { HomeContainer } from "../Characters/styles";

type MovieShape = {
  id: number;
  name: string;
  // release_date: string;
  // duration: number;
  description: string;
  path: string;
  // trailer_url: string;
  // author: string;
  // chronology: number;
};

export function Movies() {
  const movies = useSelector<StateShape, StateShape["movies"]>(
    (state) => state.movies
  );
  const dispatch = useDispatch();
  // const [movies, setMovies] = useState<MovieShape[]>([]);

  useEffect(() => {
    dispatch(getAllMovies());
    // apiMCU.get("movies").then((response) => {
    //   const moviesvariables = response.data.data.map(
    //     (mov: {
    //       id: number;
    //       title: string;
    //       overview: string;
    //       cover_url: string;
    //     }) => {
    //       return {
    //         id: String(mov.id),
    //         name: mov.title,
    //         description: mov.overview,
    //         path: mov.cover_url,
    //       };
    //     }
    //   );
    //   setMovies(moviesvariables);
    // });
  }, []);

  return (
    <HomeContainer>
      <Navbar />
      <SelfCarousel individualContent={movies} />
    </HomeContainer>
  );
}
