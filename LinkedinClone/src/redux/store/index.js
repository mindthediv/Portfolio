import { combineReducers, configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import { homeReducer } from "../reducers/homeReducer";
import { profileReducer } from "../reducers/profileReducer";
import { experiencesReducers } from "../reducers/experiencesReducer";
import { loginReducer } from "../reducers/loginReducer";
import { getDefaultMiddleware } from "@reduxjs/toolkit";
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  PURGE,
  REGISTER,
  REHYDRATE,
} from "redux-persist";
import { formExpReducer } from "../reducers/formExpReducer";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  stateReconciler: autoMergeLevel2,
};

const reducers = combineReducers({
  home: homeReducer,
  profile: profileReducer,
  experience: experiencesReducers,
  login: loginReducer,
  form: formExpReducer,
});

const persistedReducer = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducer,
});

export default store;
