/** @format */
import { createAction } from '@reduxjs/toolkit';

export let episodes = {
  get: {
    request: createAction('GET_EPISODES_REQUEST'),
    success: createAction('GET_EPISODES_SUCCESS'),
    error: createAction('GET_EPISODES_ERROR'),
  },
  next: {
    request: createAction('NEXT_EPISODES_REQUEST'),
    success: createAction('NEXT_EPISODES_SUCCESS'),
    error: createAction('NEXT_EPISODES_ERROR'),
  },
};
