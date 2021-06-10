import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { fetchReducer } from "./ducks/reducer";

export const store = createStore(fetchReducer, applyMiddleware(thunk));
