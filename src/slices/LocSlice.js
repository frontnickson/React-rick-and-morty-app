import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { URL_LOCATION } from "../constants/API";

export const getLoc = createAsyncThunk(
  "loc/getLoc",
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

const locSlice = createSlice({
  name: "loc",
  initialState: {
    loc: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLoc.pending, (state) => {
      state.isLoading = false;
    });
    builder.addCase(getLoc.fulfilled, (state, action) => {
      state.isLoading = true;
      state.loc = action.payload;
    });
    builder.addCase(getLoc.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default locSlice.reducer;
