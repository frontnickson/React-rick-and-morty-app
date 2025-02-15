import { createSlice } from "@reduxjs/toolkit";

const getFavorites = createSlice({
  name: "favorites",
  initialState: {
    list: [],
    isLoading: false,
  },
  reducers: {
    addFavorites: (state, action) => {}
  },
});
