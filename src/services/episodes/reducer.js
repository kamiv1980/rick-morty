/** @format */
import { createReducer } from '@reduxjs/toolkit';
import { episodes } from './actions';

const initialState = {
  data: {},
};

export const episodesReducer = createReducer(initialState, {
  [episodes.get.success.type]: (state, action) => {
    state.data = action.payload.data;
  },
  [episodes.next.success.type]: (state, action) => {
    state.data.results = [...state.data.results, ...action.payload.data.results];
    state.data.info = action.payload.data.info;
  },
});
