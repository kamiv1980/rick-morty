/** @format */
import { createAction } from '@reduxjs/toolkit';

export let characters = {
  get: {
    request: createAction('GET_CHARACTERS_REQUEST'),
    success: createAction('GET_CHARACTERS_SUCCESS'),
    error: createAction('GET_CHARACTERS_ERROR'),
  },
};
