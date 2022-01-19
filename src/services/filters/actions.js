/** @format */

import { createAction } from '@reduxjs/toolkit';

export const newFilterSpecies = createAction('FILTER_SPECIES', (value) => ({
  payload: {
    value,
  },
}));
export const newFilterGender = createAction('FILTER_GENDER', (value) => ({
  payload: {
    value,
  },
}));
export const newFilterStatus = createAction('FILTER_STATUS', (value) => ({
  payload: {
    value,
  },
}));
