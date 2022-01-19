/** @format */

import { combineReducers } from 'redux';

import { charactersReducer } from './characters/reducer';
import { overlayReducer } from './overlay/reducer';
import { filtersReducer } from './filters/reducer';
import { episodesReducer } from './episodes/reducer';
import { myListReducer } from './favorite/reducer';

export const rootReducer = combineReducers({
  characters: charactersReducer,
  episodes: episodesReducer,
  filters: filtersReducer,
  myList: myListReducer,
  overlay: overlayReducer,
});
