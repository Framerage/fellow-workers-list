import { createAction } from "@reduxjs/toolkit";

export const changeUserTheme = createAction<string>("THEME/changeTheme");
