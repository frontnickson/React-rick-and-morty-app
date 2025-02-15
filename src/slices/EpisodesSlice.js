import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { URL_EPISODES_PAGE } from "../constants/API";

export const getEpisodes = createAsyncThunk(
  "episodes/getEpisodes",
  async (_, thunkAPI) => {
    try {
      const array1 = await axios.get(URL_EPISODES_PAGE + "1");
      const array2 = await axios.get(URL_EPISODES_PAGE + "2");
      const array3 = await axios.get(URL_EPISODES_PAGE + "3");
      const all = [...array1.data.results, ...array2.data.results, ...array3.data.results];
      return all;
    } catch (error) {
      console.log(error);
      return thunkAPI.rejectWithValue(error);
    }
  }
);

const episodesSlice = createSlice({
  name: "episodes",
  initialState: {
    episodes: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getEpisodes.pending, (state) => {
      state.isLoading = false;
    });
    builder.addCase(getEpisodes.fulfilled, (state, action) => {
      state.isLoading = true;
      state.episodes = action.payload;
    });
    builder.addCase(getEpisodes.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default episodesSlice.reducer;
