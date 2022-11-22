import { createAsyncThunk } from "@reduxjs/toolkit";
import { getFetchedPersonList } from "api/api";

export const fetchPersonList = createAsyncThunk(
  "LIST/fetchPersonList",
  getFetchedPersonList
);
