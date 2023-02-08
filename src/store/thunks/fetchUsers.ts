import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchUsers = createAsyncThunk("users/fetch", async () => {
  const response = await axios.get("http://localhost:4000/users");
  await new Promise((res) => setTimeout(res, 10000));
  return response.data;
});
