import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { combineReducers } from "redux";
import movieNightSlice from "./slices/MovieNightSlice";

// const resetSlices: string[] = ["movieDataSlice"];

const rootReducer = combineReducers({
  movieData: movieNightSlice,
});

const persistConfig = {
  key: "root",
  storage,
  // whitelist: resetSlices,
};

export default persistReducer(persistConfig, rootReducer);
