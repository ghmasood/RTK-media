import { createSlice } from "@reduxjs/toolkit";
import { addUser } from "../thunks/addUser";
import { fetchUsers } from "../thunks/fetchUsers";

const usersSlice = createSlice({
  name: "users",
  initialState: {
    data: [] as { name: string; id: number }[],
    isLoading: false,
    error: {} as Error | null,
  },
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.data = action.payload;
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.isLoading = false;
      state.error = {
        message: action.error.message ?? "",
        name: action.error.name ?? "",
      };
    });
    builder.addCase(addUser.pending, (state, action) => {
      state.isLoading = true;
    });
    builder.addCase(addUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      state.data.push(action.payload);
    });
    builder.addCase(addUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = {
        name: action.error.name ?? "",
        message: action.error.message ?? "",
      };
    });
  },
});

export const userReducer = usersSlice.reducer;
