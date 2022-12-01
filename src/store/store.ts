import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {ListStateProps} from "./personList/types";
import listReducer from "./personList";
import themeReducer from "./personTheme";
import {UserThemeProps} from "./personTheme/types";
import logger from "./logger/logger";
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
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});
export default store;

// TODO: добавить мидлвары(прочитать про взаимодействие со стором) +
// TODO: MVC MVVC, MVP
// TODO: добавить задержку при вводе в инпут +
