/** @format */
import { createSelector } from '@reduxjs/toolkit';

export const selectorCharacters = (state) => state.characters.data.results;
export const selectorInfo = (state) => state.characters.data.info;

export const selectorSpecies = createSelector(selectorCharacters, (results) => {
  const species = [];
  if (!!results) {
    results.forEach((item) => {
      if (!species.includes(item.species)) {
        species.push(item.species);
      }
    });
  }
  return species.sort();
});
export const selectorGenders = createSelector(selectorCharacters, (results) => {
  const genders = [];
  if (!!results) {
    results.forEach((item) => {
      if (!genders.includes(item.gender)) {
        genders.push(item.gender);
      }
    });
  }
  return genders.sort();
});
export const selectorStatuses = createSelector(selectorCharacters, (results) => {
  const statuses = [];
  if (!!results) {
    results.forEach((item) => {
      if (!statuses.includes(item.status)) {
        statuses.push(item.status);
      }
    });
  }
  return statuses.sort();
});
