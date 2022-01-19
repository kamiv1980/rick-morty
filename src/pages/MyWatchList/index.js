import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styles from './styles.module.css';
import { getEpisodes } from '../../services/episodes/operations';
import { selectorEpisodes } from '../../services/episodes/selectors';
import { selectorIsLoading } from '../../services/overlay/selectors';
import { Loader } from '../../components/Loader';
import { FormControlLabel, IconButton, List, ListItem, ListItemText, Switch } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { DialogSelect } from './components';
import { selectorMyList } from '../../services/favorite/selectors';
import { deleteEpisode, editEpisode } from '../../services/favorite/actions';

export const MyWatchList = () => {
  const dispatch = useDispatch();
  const episodes = useSelector(selectorEpisodes);
  const isLoading = useSelector(selectorIsLoading);
  const myList = useSelector(selectorMyList);
  const listRef = useRef(myList);

  useEffect(() => {
    listRef.current = myList;
  }, [myList]);

  useEffect(() => {
    dispatch(getEpisodes());
    return () => {
      console.log(listRef.current);
      localStorage.setItem('myList', JSON.stringify(listRef.current));
    };
  }, [dispatch]);

  const handleDelete = (id) => () => dispatch(deleteEpisode(id));

  const handleChange = (id) => () => dispatch(editEpisode(id));

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>My watch list</h2>
      {isLoading && <Loader />}
      <DialogSelect list={episodes} />
      <List>
        {!!myList &&
          myList.map((item) => (
            <ListItem
              key={item.id}
              secondaryAction={
                <>
                  <FormControlLabel
                    control={<Switch checked={item.complete} onChange={handleChange(item.id)} name="complete" />}
                    label="complete"
                  />
                  <IconButton edge="end" aria-label="delete" onClick={handleDelete(item.id)}>
                    <DeleteIcon />
                  </IconButton>
                </>
              }
            >
              <ListItemText primary={item.name} secondary={item.episode} />
            </ListItem>
          ))}
      </List>
    </div>
  );
};
