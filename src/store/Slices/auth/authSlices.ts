import { createSlice, isAllOf } from '@reduxjs/toolkit';
import { initialState } from './initialState.ts';
import { CodeThunk, LoginThunk } from "./thunk";

export const auth = createSlice({
  name: 'auth',
  initialState,
  selectors: {
    selectSlice: (state) => state,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addMatcher(isAllOf(LoginThunk.pending, CodeThunk.pending), (state) => {
        state.loading = true;
      })
      .addMatcher(isAllOf(LoginThunk.fulfilled, CodeThunk.fulfilled), (state) => {
        state.loading = false;
      })
      .addMatcher(isAllOf(LoginThunk.rejected, CodeThunk.rejected), (state) => {
        state.loading = false;
      });
  },
});

export const { selectSlice } = auth.selectors;

export const { } = auth.actions;

export default auth.reducer;