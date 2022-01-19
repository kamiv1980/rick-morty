/** @format */
import { createReducer } from '@reduxjs/toolkit';
import { characters } from './actions';

const initialState = {
  data: {},
};

export const charactersReducer = createReducer(initialState, {
  [characters.get.success.type]: (state, action) => {
    state.data = action.payload.data;
  },
});
