import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { URL_LOCATION } from "../constants/API";

export const getLocation = createAsyncThunk(
  "location/getLocation",
  async (url, thunkAPI) => {
    try {
      const res = await axios.get(URL_LOCATION);
      return res.data;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const locationSlice = createSlice({
  name: "location",
  initialState: {
    location: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getLocation.pending, (state) => {
      state.isLoading = false;
    });
    builder.addCase(getLocation.fulfilled, (state, action) => {
      state.isLoading = true;
      state.location = action.payload;
    });
    builder.addCase(getLocation.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default locationSlice.reducer;
