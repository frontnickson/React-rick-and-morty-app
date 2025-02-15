import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getEpisode = createAsyncThunk(
  "episode/getEpisode",
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

const episodeSlice = createSlice({
  name: "episode",
  initialState: {
    episode: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getEpisode.pending, (state) => {
      state.isLoading = false;
    });
    builder.addCase(getEpisode.fulfilled, (state, action) => {
      state.isLoading = true;
      state.episode = action.payload;
    });
    builder.addCase(getEpisode.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default episodeSlice.reducer;