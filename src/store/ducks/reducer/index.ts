import { AnyAction } from "redux";

export type DataShape = {
  id: number;
  name: string;
  description: string;
  path: string;
};

export interface CharacterShape extends DataShape {
  participations: string[];
}

export type StateShape = {
  characters: CharacterShape[];
  movies: DataShape[];
  hqs: DataShape[];
};

const INITIAL_STATE: StateShape = {
  characters: [],
  movies: [],
  hqs: [],
};

export function fetchReducer(state = INITIAL_STATE, action: AnyAction) {
  switch (action.type) {
    case "ADD_CHARS":
      return { ...state, characters: action.payload };
    case "ADD_MOVIES":
      return { ...state, movies: action.payload };
    case "ADD_HQS":
      return { ...state, hqs: action.payload };
    default:
      return state;
  }
}
