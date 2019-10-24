import {combineReducers } from "redux";
import { HomeReducer as home} from "../actions/homeActions";
export const makeRootReducer = () => {
    return combineReducers ({
        home
    });
}

export default makeRootReducer;