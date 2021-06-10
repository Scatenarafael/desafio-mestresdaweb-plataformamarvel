import { apiMARVEL, apiMCU } from "../../services/api";
import { DataShape } from "../ducks/reducer";
import { Dispatch } from "redux";
import md5 from "md5";

export const getAllMovies = () => {
  return (dispatch: Dispatch) => {
    apiMCU
      .get("movies")
      .then((response) => {
        const movies: DataShape[] = response.data.data.map(
          (mov: {
            id: number;
            title: string;
            overview: string;
            cover_url: string;
          }) => {
            return {
              id: String(mov.id),
              name: mov.title,
              description: mov.overview,
              path: mov.cover_url,
            };
          }
        );
        dispatch({ type: "ADD_MOVIES", payload: movies });
      })
      .catch(console.log);
  };
};

const ts = Number(new Date());

const hash = md5(
  String(ts) +
    process.env.REACT_APP_MARVEL_PRIVATE_KEY +
    process.env.REACT_APP_MARVEL_PUBLIC_KEY
);

export const getAllCharacters = () => {
  return (dispatch: Dispatch) => {
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
            comics: {
              available: number;
              collectionURI: string;
              items: { resourceURI: string; name: string }[];
            };
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
              participations: ch.comics.items.map((item) => {
                return item.name;
              }),
            };
          }
        );
        dispatch({ type: "ADD_CHARS", payload: chars });
      })
      .catch(console.log);
  };
};

export const getAllHQS = () => {
  return (dispatch: Dispatch) => {
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
        dispatch({ type: "ADD_HQS", payload: comics });
      })
      .catch(console.log);
  };
};
