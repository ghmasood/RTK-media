import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const addUser = createAsyncThunk(
  "users/add",
  async (nameInput: string) => {
    const response = await axios.post("http://localhost:4000/users", {
      name: nameInput,
    });
    await new Promise((res) => setTimeout(res, 1500));

    return response.data;
  }
);
