/** @format */
import { createReducer } from '@reduxjs/toolkit';

import { newFilterSpecies, newFilterGender, newFilterStatus } from './actions';

const initialState = {
  filterSpecies: '',
  filterGender: '',
  filterStatus: '',
};

export const filtersReducer = createReducer(initialState, {
  [newFilterSpecies]: (state, action) => {
    state.filterSpecies = action.payload.value;
  },
  [newFilterGender]: (state, action) => {
    state.filterGender = action.payload.value;
  },
  [newFilterStatus]: (state, action) => {
    state.filterStatus = action.payload.value;
  },
});
