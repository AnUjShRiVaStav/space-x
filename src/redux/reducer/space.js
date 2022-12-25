import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  loading: false,
  hasErrors: false,
  space: [],
};

// A slice for space with our 3 reducers
const spaceSlice = createSlice({
  name: "space",
  initialState,
  reducers: {
    getSpace: (state) => {
      state.loading = true;
    },
    getSpaceSuccess: (state, { payload }) => {
      state.space = payload
      state.loading = false
      state.hasErrors = false
    },
    getSpaceFailure: (state) => {
      state.loading = false;
      state.hasErrors = true;
    },
  },
});

// The reducer
export const { getSpace, getSpaceSuccess, getSpaceFailure } =
  spaceSlice.actions;

// A selector
export const spaceSelector = (state) => state.space;

// The reducer
export default spaceSlice.reducer;
