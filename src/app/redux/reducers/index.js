import { combineReducers } from "redux";
import queriesReducer from "./queriesReducer";
import imagesReducer from "./imagesReducer";

export const rootReducer = combineReducers({
    queriesReducer,
    imagesReducer
});
