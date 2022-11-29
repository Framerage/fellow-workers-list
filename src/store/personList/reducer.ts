import {createReducer, PayloadAction} from "@reduxjs/toolkit";
import {
  deletePersonFromList,
  editPersonCharacters,
  fetchPersonList,
} from "./actions";
import {ListStateProps} from "./types";

const initialStateList: ListStateProps = {
  personList: [],
  isDataFetched: false,
};
export default createReducer(initialStateList, {
  [fetchPersonList.fulfilled.type]: (
    state,
    action: PayloadAction<ListStateProps["personList"]>,
  ) => {
    state.isDataFetched = false;
    state.personList = action.payload;
  },
  [fetchPersonList.pending.type]: state => {
    state.isDataFetched = true;
  },

  [deletePersonFromList.fulfilled.type]: (
    state,
    action: PayloadAction<ListStateProps["personList"]>,
  ) => {
    state.personList = action.payload;
    state.isDataFetched = false;
  },
  [deletePersonFromList.pending.type]: state => {
    state.isDataFetched = true;
  },
  [editPersonCharacters.fulfilled.type]: (
    state,
    action: PayloadAction<ListStateProps["personList"]>,
  ) => {
    state.personList = action.payload;
    state.isDataFetched = false;
  },
  [editPersonCharacters.pending.type]: state => {
    state.isDataFetched = true;
  },
});
