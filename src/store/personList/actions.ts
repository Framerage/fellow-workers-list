import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import { getFetchedPersonList } from "api/api";
import { PersonListProps } from "types/appTypes";

export const deletePerson =
  createAction<PersonListProps[]>("LIST/deletePerson");
export const editPersonMainCharacters = createAction<PersonListProps[]>(
  "LIST/editPersonMainCharacters"
);
export const fetchPersonList = createAsyncThunk(
  "LIST/fetchPersonList",
  getFetchedPersonList
);
