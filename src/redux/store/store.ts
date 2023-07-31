import { combineReducers, configureStore } from "@reduxjs/toolkit";
import idReducer from "../reducers/IdSlice";
import boardIdReducer from "../reducers/boardIdSlice";
const rootReducer = combineReducers({
  idReducer,
  boardIdReducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];
