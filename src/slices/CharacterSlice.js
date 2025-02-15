import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { URL_CHARACTER } from "../constants/API";
import axios from "axios";

export const getCharacter = createAsyncThunk(
  "character/getCharacter",
  async (_, thunkAPI) => {
    try {
      const array1 = await axios.get(URL_CHARACTER + "?page=1");
      const array2 = await axios.get(URL_CHARACTER + "?page=2");
      const array3 = await axios.get(URL_CHARACTER + "?page=3");
      const array4 = await axios.get(URL_CHARACTER + "?page=4")
      const array5 = await axios.get(URL_CHARACTER + "?page=5")
      const array6 = await axios.get(URL_CHARACTER + "?page=6")
      const array7 = await axios.get(URL_CHARACTER + "?page=7")
      const array8 = await axios.get(URL_CHARACTER + "?page=8")
      const all = [...array1.data.results,...array2.data.results,...array3.data.results,...array4.data.results,...array5.data.results,...array6.data.results,...array7.data.results,...array8.data.results]
      return all
    } catch (error) {
      console.log(error);
      return thunkAPI.fulfillWithValue(error);
    }
  }
);

const characterSlice = createSlice({
  name: "character",
  initialState: {
    character: [],
    isLoading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCharacter.pending, (state) => {
      state.isLoading = false;
    });
    builder.addCase(getCharacter.fulfilled, (state, action) => {
      state.isLoading = true;
      state.character = action.payload;
    });
    builder.addCase(getCharacter.rejected, (state) => {
      state.isLoading = false;
    });
  },
});

export default characterSlice.reducer;
