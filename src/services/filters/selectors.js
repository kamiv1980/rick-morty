import { createSelector } from '@reduxjs/toolkit';
import { selectorCharacters } from '../characters/selectors';

export const selectorFilterSpecies = (state) => state.filters.filterSpecies;
export const selectorFilterGender = (state) => state.filters.filterGender;
export const selectorFilterStatus = (state) => state.filters.filterStatus;

export const selectorVisibleCharacters = createSelector(
  [selectorCharacters, selectorFilterSpecies, selectorFilterGender, selectorFilterStatus],
  (characters, filterSpecies, filterGender, filterStatus) => {
    let sortList = characters;

    if (filterSpecies) {
      sortList = sortList.filter(({ species }) => species.includes(filterSpecies));
    }

    if (filterGender) {
      sortList = sortList.filter(({ gender }) => gender.includes(filterGender));
    }
    if (filterStatus) {
      sortList = sortList.filter(({ status }) => status.includes(filterStatus));
    }
    return sortList;
  },
);
