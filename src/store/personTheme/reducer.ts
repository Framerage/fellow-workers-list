import { createReducer, PayloadAction } from "@reduxjs/toolkit";
import { changeUserTheme } from "./actions";
import { UserThemeProps } from "./types";

const initialStateTheme: UserThemeProps = {
  userTheme: "grey",
};
export default createReducer(initialStateTheme, {
  [changeUserTheme.type]: (state, action: PayloadAction<string>) => {
    state.userTheme = action.payload;
  },
});
