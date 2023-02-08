import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { IUserdata } from "../slices/usersSlice";

export const removeUser = createAsyncThunk(
  "users/remove",
  async (id: number) => {
    const response = await axios.delete(`http://localhost:4000/users/${id}`);
    await new Promise((res) => setTimeout(res, 1500));

    return id;
  }
);
