import { createSelector } from "@reduxjs/toolkit";
import { Store } from "store/store";

const rootSelector = (state: Store) => state.theme;
export const selectUserTheme = createSelector(
  rootSelector,
  (state) => state.userTheme
);
