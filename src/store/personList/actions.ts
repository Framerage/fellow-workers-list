import {createAsyncThunk} from "@reduxjs/toolkit";
import {
  deleteChoosedPersonFromList,
  editChoosedPersonCharacters,
  getFetchedPersonList,
} from "api/api";

// export const deletePersonFromList =
//   createAction<PersonListProps[]>("LIST/deletePerson");
// export const editPersonCharacters = createAction<PersonListProps[]>(
//   "LIST/editPersonMainCharacters"
// );
export const fetchPersonList = createAsyncThunk(
  "LIST/fetchPersonList",
  getFetchedPersonList,
);
export const editPersonCharacters = createAsyncThunk(
  "LIST/editPersonMainCharacters",
  editChoosedPersonCharacters,
);
export const deletePersonFromList = createAsyncThunk(
  "LIST/deletePersonFromList",
  deleteChoosedPersonFromList,
);
