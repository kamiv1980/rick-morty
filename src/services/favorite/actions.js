/** @format */
/** @format */
import { createAction } from '@reduxjs/toolkit';

export const addEpisode = createAction('ADD_CONTACT', (id, name, episode) => ({
  payload: {
    id,
    name,
    episode,
    complete: false,
  },
}));
export const deleteEpisode = createAction('DELETE_CONTACT');
export const editEpisode = createAction('EDIT_CONTACT');
