import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { episodes } from './actions';
import { url } from '../baseUrl';

toast.configure();

export const getEpisodes = () => (dispatch) => {
  dispatch(episodes.get.request());

  const options = {
    method: 'GET',
    url: url.getEpisodes,
  };
  axios(options)
    .then((res) => {
      dispatch(episodes.get.success(res));
      return res;
    })
    .then((res) => {
      if (res.data.info.next) {
        dispatch(loadNext());
      }
    })
    .catch((err) => {
      dispatch(episodes.get.error(err));
      toast.error(err.message);
    });
};
export const loadNext = () => (dispatch, getState) => {
  dispatch(episodes.next.request());
  const urlNext = getState().episodes.data.info.next;
  const options = {
    method: 'GET',
    url: urlNext,
  };

  if (urlNext) {
    axios(options)
      .then((res) => {
        dispatch(episodes.next.success(res));
        return res;
      })
      .then((res) => {
        if (res.data.info.next) {
          dispatch(loadNext());
        }
      })
      .catch((err) => {
        dispatch(episodes.next.error(err));
        toast.error(err.message);
      });
  }
};
