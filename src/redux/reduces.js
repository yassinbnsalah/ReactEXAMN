import { combineReducers } from "redux";
import movies from "./moviesSlice.js";
import wishlist from "./wishlistSlice.js";
import Data from './dataSlice.js'
const reducers = combineReducers({
    movies,
    wishlist,Data
});

export default reducers;
