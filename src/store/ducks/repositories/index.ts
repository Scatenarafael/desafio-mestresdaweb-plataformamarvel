import { Action } from "redux";

type CharShape = {
  id: number;
  name: string;
  description: string;
  path: string;
};
type MovieShape = {
  id: number;
  name: string;
  description: string;
  path: string;
};
type HqShape = {
  id: number;
  name: string;
  description: string;
  path: string;
};

type StateShape = {
  characters: CharShape[];
  movies: MovieShape[];
  hqs: HqShape[];
};

export function requestReducer(
  state: StateShape = {
    characters: [],
    movies: [],
    hqs: [],
  },
  action: Action
) {
  switch (action.type){
    case 'CHARACTERS_REQUEST':
      return {
        ...state,
        characters: [...state.characters, action.payload],
      }
  }

}
