import { createStore, combineReducers } from "redux";
import { count } from "./reducers";
export const store = createStore(combineReducers({ count }));
