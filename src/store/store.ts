import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { ListStateProps } from "./personList/types";
import listReducer from "./personList";
export type Store = {
  list: ListStateProps;
};
const rootReducer = combineReducers<Store>({
  list: listReducer,
});
const store = configureStore({
  reducer: rootReducer,
});
export default store;
