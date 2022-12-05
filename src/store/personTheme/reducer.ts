import {createReducer, PayloadAction} from "@reduxjs/toolkit";
import {changeUserTheme} from "./actions";
import {UserThemeProps} from "./types";

const initialStateTheme: UserThemeProps = {
  userTheme: 0,
};
export default createReducer(initialStateTheme, {
  [changeUserTheme.type]: (state, action: PayloadAction<number>) => {
    state.userTheme = action.payload;
  },
});
