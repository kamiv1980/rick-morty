import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { useSelector, useDispatch } from 'react-redux';

import { selectorGenders, selectorSpecies, selectorStatuses } from '../../../../services/characters/selectors';
import { newFilterStatus, newFilterGender, newFilterSpecies } from '../../../../services/filters/actions';
import {
  selectorFilterGender,
  selectorFilterSpecies,
  selectorFilterStatus,
} from '../../../../services/filters/selectors';
import { MenuItem, Select } from '@mui/material';
import styles from './styles.module.css';

export const Filters = () => {
  const arrayOfSpecies = useSelector(selectorSpecies);
  const arrayOfGenders = useSelector(selectorGenders);
  const arrayOfStatuses = useSelector(selectorStatuses);
  const filterSpecies = useSelector(selectorFilterSpecies);
  const filterGender = useSelector(selectorFilterGender);
  const filterStatus = useSelector(selectorFilterStatus);
  const dispatch = useDispatch();

  const handleChangeSpecies = (event) => {
    dispatch(newFilterSpecies(event.target.value));
  };

  const handleChangeGender = (event) => {
    dispatch(newFilterGender(event.target.value));
  };

  const handleChangeStatus = (event) => {
    dispatch(newFilterStatus(event.target.value));
  };

  return (
    <aside className={styles.aside}>
      <h3>Filters</h3>
      <FormControl sx={{ m: 1, minWidth: 150 }}>
        <InputLabel id="demo-simple-select-helper-label">Species</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={filterSpecies}
          label="Species"
          onChange={handleChangeSpecies}
        >
          <MenuItem value={''}>None</MenuItem>
          {!!arrayOfSpecies &&
            arrayOfSpecies.map((item, index) => (
              <MenuItem key={index} value={item}>
                {item}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 150 }}>
        <InputLabel id="demo-simple-select-helper-label">Gender</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={filterGender}
          label="Gender"
          onChange={handleChangeGender}
        >
          <MenuItem value={''}>None</MenuItem>
          {!!arrayOfGenders &&
            arrayOfGenders.map((item, index) => (
              <MenuItem key={index} value={item}>
                {item}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
      <FormControl sx={{ m: 1, minWidth: 150 }}>
        <InputLabel id="demo-simple-select-helper-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-helper-label"
          id="demo-simple-select-helper"
          value={filterStatus}
          label="Status"
          onChange={handleChangeStatus}
        >
          <MenuItem value={''}>None</MenuItem>
          {!!arrayOfStatuses &&
            arrayOfStatuses.map((item, index) => (
              <MenuItem key={index} value={item}>
                {item}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </aside>
  );
};
