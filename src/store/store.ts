import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {ListStateProps} from "./personList/types";
import listReducer from "./personList";
import themeReducer from "./personTheme";
import {UserThemeProps} from "./personTheme/types";
export type Store = {
  list: ListStateProps;
  theme: UserThemeProps;
};
const rootReducer = combineReducers<Store>({
  list: listReducer,
  theme: themeReducer,
});
const store = configureStore({
  reducer: rootReducer,
});
export default store;

// TODO: добавить мидлвары(прочитать про взаимодействие со стором)
// TODO: MVC MVVC, MVP
// TODO: добавить задержку при вводе в инпут
