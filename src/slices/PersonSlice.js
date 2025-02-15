import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { URL_CHARACTER } from "../constants/API";

export const getPerson = createAsyncThunk(
  "person/getPerson",
  async (url, thunkAPI) => {
    try {
      const res = await axios.get(url);
      return res.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const personSlice = createSlice({
  name: "person",
  initialState: {
    person: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPerson.pending, (state) => {
      state.isLoading = false;
    });
    builder.addCase(getPerson.fulfilled, (state, action) => {
      state.isLoading = true;
      state.person = action.payload;
    });
    builder.addCase(getPerson.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default personSlice.reducer;
