import {createSelector} from "@reduxjs/toolkit";
import {Store} from "store/store";

const rootSelect = (state: Store) => state.list;
export const selectPersonList = createSelector(
  rootSelect,
  state => state.personList,
);
export const selectIsPromiseReady = createSelector(
  rootSelect,
  state => state.isDataFetched,
);
