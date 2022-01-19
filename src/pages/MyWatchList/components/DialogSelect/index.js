import * as React from 'react';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useDispatch, useSelector } from 'react-redux';
import { addEpisode } from '../../../../services/favorite/actions';
import { selectorMyList } from '../../../../services/favorite/selectors';
import styles from './styles.module.css';

export const DialogSelect = ({ list }) => {
  const dispatch = useDispatch();
  const myList = useSelector(selectorMyList);
  const [open, setOpen] = useState(false);
  const [episode, setEpisode] = useState({});
  const handleChange = (event) => {
    setEpisode(event.target.value);
  };

  const handleClose = (event, reason) => {
    if (reason !== 'backdropClick') {
      setOpen(false);
    }
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleOk = () => {
    if (myList.find((item) => item.id === episode.id)) {
      alert('The list already contains this episode');
      setEpisode({});
      setOpen(false);
      return;
    }
    if (!!episode.name) {
      dispatch(addEpisode(episode.id, episode.name, episode.episode));
      setEpisode({});
      setOpen(false);
    }
    setOpen(false);
  };

  return (
    <div className={styles.container}>
      <Button onClick={handleClickOpen}>Add episode</Button>
      <Dialog disableEscapeKeyDown open={open} onClose={handleClose}>
        <DialogTitle>Choose episode</DialogTitle>
        <DialogContent>
          <Box component="form" sx={{ display: 'flex', flexWrap: 'wrap' }}>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-dialog-select-label">Episodes</InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                value={episode}
                onChange={handleChange}
                input={<OutlinedInput label="Episodes" />}
              >
                {!!list &&
                  list.map((item) => (
                    <MenuItem key={item.id} value={item}>
                      {item.name} - {item.episode}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleOk}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
