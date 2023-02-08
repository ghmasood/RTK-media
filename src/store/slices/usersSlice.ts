import { createSlice } from "@reduxjs/toolkit";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    data: [] as { name: string; id: string }[],
    isLoading: false,
    error: {} as Error,
  },
  reducers: {},
});

export const userReducer = usersSlice.reducer;
