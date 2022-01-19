/** @format */
import { createReducer } from '@reduxjs/toolkit';

import { addEpisode, deleteEpisode, editEpisode } from './actions';

const initialState = {
  items: JSON.parse(window.localStorage.getItem('myList')) ?? [],
};

export const myListReducer = createReducer(initialState, {
  [addEpisode]: (state, action) => {
    state.items = [...state.items, action.payload];
  },
  [deleteEpisode]: (state, action) => {
    state.items = state.items.filter(({ id }) => id !== action.payload);
  },
  [editEpisode]: (state, action) => {
    state.items = state.items.map((item) =>
      item.id === action.payload ? { ...item, complete: !item.complete } : item,
    );
  },
});
